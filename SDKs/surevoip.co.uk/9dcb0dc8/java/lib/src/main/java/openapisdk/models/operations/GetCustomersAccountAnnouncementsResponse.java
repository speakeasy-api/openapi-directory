package openapisdk.models.operations;



public class GetCustomersAccountAnnouncementsResponse {
    public String contentType;
    public GetCustomersAccountAnnouncementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCustomersAccountAnnouncementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomersAccountAnnouncements200ApplicationJson getCustomersAccountAnnouncements200ApplicationJSONObject;
    public GetCustomersAccountAnnouncementsResponse withGetCustomersAccountAnnouncements200ApplicationJsonObject(GetCustomersAccountAnnouncements200ApplicationJson getCustomersAccountAnnouncements200ApplicationJSONObject) {
        this.getCustomersAccountAnnouncements200ApplicationJSONObject = getCustomersAccountAnnouncements200ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema;
    public GetCustomersAccountAnnouncementsResponse withOneannouncementsPostResponses403ContentApplication1jsonSchema(openapisdk.models.shared.OneannouncementsPostResponses403ContentApplication1jsonSchema oneannouncementsPostResponses403ContentApplication1jsonSchema) {
        this.oneannouncementsPostResponses403ContentApplication1jsonSchema = oneannouncementsPostResponses403ContentApplication1jsonSchema;
        return this;
    }
}