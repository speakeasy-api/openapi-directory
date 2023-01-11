package openapisdk.models.operations;



public class ListGroupsResponse {
    public String contentType;
    public ListGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListGroups200ApplicationJson listGroups200ApplicationJSONObject;
    public ListGroupsResponse withListGroups200ApplicationJsonObject(ListGroups200ApplicationJson listGroups200ApplicationJSONObject) {
        this.listGroups200ApplicationJSONObject = listGroups200ApplicationJSONObject;
        return this;
    }
}