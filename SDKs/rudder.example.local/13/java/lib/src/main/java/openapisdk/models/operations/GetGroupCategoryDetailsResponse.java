package openapisdk.models.operations;



public class GetGroupCategoryDetailsResponse {
    public String contentType;
    public GetGroupCategoryDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetGroupCategoryDetails200ApplicationJson getGroupCategoryDetails200ApplicationJSONObject;
    public GetGroupCategoryDetailsResponse withGetGroupCategoryDetails200ApplicationJsonObject(GetGroupCategoryDetails200ApplicationJson getGroupCategoryDetails200ApplicationJSONObject) {
        this.getGroupCategoryDetails200ApplicationJSONObject = getGroupCategoryDetails200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetGroupCategoryDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}