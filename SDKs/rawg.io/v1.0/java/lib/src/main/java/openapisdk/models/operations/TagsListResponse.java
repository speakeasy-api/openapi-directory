package openapisdk.models.operations;



public class TagsListResponse {
    public String contentType;
    public TagsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TagsList200ApplicationJson tagsList200ApplicationJSONObject;
    public TagsListResponse withTagsList200ApplicationJsonObject(TagsList200ApplicationJson tagsList200ApplicationJSONObject) {
        this.tagsList200ApplicationJSONObject = tagsList200ApplicationJSONObject;
        return this;
    }
}