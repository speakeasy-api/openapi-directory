package openapisdk.models.operations;



public class GetTheStatusOfTheApiServiceResponse {
    public String contentType;
    public GetTheStatusOfTheApiServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetTheStatusOfTheApiService200ApplicationJson getTheStatusOfTheAPIService200ApplicationJSONObject;
    public GetTheStatusOfTheApiServiceResponse withGetTheStatusOfTheApiService200ApplicationJsonObject(GetTheStatusOfTheApiService200ApplicationJson getTheStatusOfTheAPIService200ApplicationJSONObject) {
        this.getTheStatusOfTheAPIService200ApplicationJSONObject = getTheStatusOfTheAPIService200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetTheStatusOfTheApiServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}