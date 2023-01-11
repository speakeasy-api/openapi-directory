package openapisdk.models.operations;



public class TrackJourneyEventResponse {
    public String contentType;
    public TrackJourneyEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TrackJourneyEventResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TrackJourneyEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TrackJourneyEvent201ApplicationJson trackJourneyEvent201ApplicationJSONObject;
    public TrackJourneyEventResponse withTrackJourneyEvent201ApplicationJsonObject(TrackJourneyEvent201ApplicationJson trackJourneyEvent201ApplicationJSONObject) {
        this.trackJourneyEvent201ApplicationJSONObject = trackJourneyEvent201ApplicationJSONObject;
        return this;
    }
    public TrackJourneyEvent400ApplicationJson trackJourneyEvent400ApplicationJSONObject;
    public TrackJourneyEventResponse withTrackJourneyEvent400ApplicationJsonObject(TrackJourneyEvent400ApplicationJson trackJourneyEvent400ApplicationJSONObject) {
        this.trackJourneyEvent400ApplicationJSONObject = trackJourneyEvent400ApplicationJSONObject;
        return this;
    }
    public TrackJourneyEvent401ApplicationJson trackJourneyEvent401ApplicationJSONObject;
    public TrackJourneyEventResponse withTrackJourneyEvent401ApplicationJsonObject(TrackJourneyEvent401ApplicationJson trackJourneyEvent401ApplicationJSONObject) {
        this.trackJourneyEvent401ApplicationJSONObject = trackJourneyEvent401ApplicationJSONObject;
        return this;
    }
    public TrackJourneyEvent403ApplicationJson trackJourneyEvent403ApplicationJSONObject;
    public TrackJourneyEventResponse withTrackJourneyEvent403ApplicationJsonObject(TrackJourneyEvent403ApplicationJson trackJourneyEvent403ApplicationJSONObject) {
        this.trackJourneyEvent403ApplicationJSONObject = trackJourneyEvent403ApplicationJSONObject;
        return this;
    }
    public TrackJourneyEvent429ApplicationJson trackJourneyEvent429ApplicationJSONObject;
    public TrackJourneyEventResponse withTrackJourneyEvent429ApplicationJsonObject(TrackJourneyEvent429ApplicationJson trackJourneyEvent429ApplicationJSONObject) {
        this.trackJourneyEvent429ApplicationJSONObject = trackJourneyEvent429ApplicationJSONObject;
        return this;
    }
    public TrackJourneyEvent500ApplicationJson trackJourneyEvent500ApplicationJSONObject;
    public TrackJourneyEventResponse withTrackJourneyEvent500ApplicationJsonObject(TrackJourneyEvent500ApplicationJson trackJourneyEvent500ApplicationJSONObject) {
        this.trackJourneyEvent500ApplicationJSONObject = trackJourneyEvent500ApplicationJSONObject;
        return this;
    }
}