package openapisdk.models.operations;



public class ListChangeRequestsResponse {
    public String contentType;
    public ListChangeRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListChangeRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListChangeRequests200ApplicationJson listChangeRequests200ApplicationJSONObject;
    public ListChangeRequestsResponse withListChangeRequests200ApplicationJsonObject(ListChangeRequests200ApplicationJson listChangeRequests200ApplicationJSONObject) {
        this.listChangeRequests200ApplicationJSONObject = listChangeRequests200ApplicationJSONObject;
        return this;
    }
}