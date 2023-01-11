package openapisdk.models.operations;



public class GetAllCveResponse {
    public String contentType;
    public GetAllCveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllCveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAllCve200ApplicationJson getAllCve200ApplicationJSONObject;
    public GetAllCveResponse withGetAllCve200ApplicationJsonObject(GetAllCve200ApplicationJson getAllCve200ApplicationJSONObject) {
        this.getAllCve200ApplicationJSONObject = getAllCve200ApplicationJSONObject;
        return this;
    }
}