package openapisdk.models.operations;



public class GetTargetsAllScheduledscansExpandedResponse {
    public String contentType;
    public GetTargetsAllScheduledscansExpandedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsAllScheduledscansExpandedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTargetsAllScheduledscansExpanded200ApplicationJson getTargetsAllScheduledscansExpanded200ApplicationJSONObject;
    public GetTargetsAllScheduledscansExpandedResponse withGetTargetsAllScheduledscansExpanded200ApplicationJsonObject(GetTargetsAllScheduledscansExpanded200ApplicationJson getTargetsAllScheduledscansExpanded200ApplicationJSONObject) {
        this.getTargetsAllScheduledscansExpanded200ApplicationJSONObject = getTargetsAllScheduledscansExpanded200ApplicationJSONObject;
        return this;
    }
    public GetTargetsAllScheduledscansExpanded404ApplicationJson getTargetsAllScheduledscansExpanded404ApplicationJSONObject;
    public GetTargetsAllScheduledscansExpandedResponse withGetTargetsAllScheduledscansExpanded404ApplicationJsonObject(GetTargetsAllScheduledscansExpanded404ApplicationJson getTargetsAllScheduledscansExpanded404ApplicationJSONObject) {
        this.getTargetsAllScheduledscansExpanded404ApplicationJSONObject = getTargetsAllScheduledscansExpanded404ApplicationJSONObject;
        return this;
    }
}