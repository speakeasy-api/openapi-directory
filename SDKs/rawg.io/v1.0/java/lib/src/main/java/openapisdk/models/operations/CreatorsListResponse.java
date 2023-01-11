package openapisdk.models.operations;



public class CreatorsListResponse {
    public String contentType;
    public CreatorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreatorsList200ApplicationJson creatorsList200ApplicationJSONObject;
    public CreatorsListResponse withCreatorsList200ApplicationJsonObject(CreatorsList200ApplicationJson creatorsList200ApplicationJSONObject) {
        this.creatorsList200ApplicationJSONObject = creatorsList200ApplicationJSONObject;
        return this;
    }
}