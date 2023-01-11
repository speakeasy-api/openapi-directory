package openapisdk.models.operations;



public class PostAnnouncementsResponse {
    public String contentType;
    public PostAnnouncementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAnnouncementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAnnouncements201ApplicationJson postAnnouncements201ApplicationJSONObject;
    public PostAnnouncementsResponse withPostAnnouncements201ApplicationJsonObject(PostAnnouncements201ApplicationJson postAnnouncements201ApplicationJSONObject) {
        this.postAnnouncements201ApplicationJSONObject = postAnnouncements201ApplicationJSONObject;
        return this;
    }
    public PostAnnouncements400ApplicationJson postAnnouncements400ApplicationJSONObject;
    public PostAnnouncementsResponse withPostAnnouncements400ApplicationJsonObject(PostAnnouncements400ApplicationJson postAnnouncements400ApplicationJSONObject) {
        this.postAnnouncements400ApplicationJSONObject = postAnnouncements400ApplicationJSONObject;
        return this;
    }
    public PostAnnouncements403ApplicationJson postAnnouncements403ApplicationJSONObject;
    public PostAnnouncementsResponse withPostAnnouncements403ApplicationJsonObject(PostAnnouncements403ApplicationJson postAnnouncements403ApplicationJSONObject) {
        this.postAnnouncements403ApplicationJSONObject = postAnnouncements403ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema;
    public PostAnnouncementsResponse withOneannouncementsPostResponses403ContentApplication1jsonSchema(openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema) {
        this.oneannouncementsPostResponses403ContentApplication1jsonSchema = oneannouncementsPostResponses403ContentApplication1jsonSchema;
        return this;
    }
}