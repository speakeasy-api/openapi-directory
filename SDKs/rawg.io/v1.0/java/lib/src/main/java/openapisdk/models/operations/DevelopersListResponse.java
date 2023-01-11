package openapisdk.models.operations;



public class DevelopersListResponse {
    public String contentType;
    public DevelopersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DevelopersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DevelopersList200ApplicationJson developersList200ApplicationJSONObject;
    public DevelopersListResponse withDevelopersList200ApplicationJsonObject(DevelopersList200ApplicationJson developersList200ApplicationJSONObject) {
        this.developersList200ApplicationJSONObject = developersList200ApplicationJSONObject;
        return this;
    }
}