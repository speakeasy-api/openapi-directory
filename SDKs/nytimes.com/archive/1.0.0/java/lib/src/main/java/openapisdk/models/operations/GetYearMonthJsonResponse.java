package openapisdk.models.operations;



public class GetYearMonthJsonResponse {
    public String contentType;
    public GetYearMonthJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetYearMonthJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetYearMonthJson200ApplicationJson getYearMonthJSON200ApplicationJSONObject;
    public GetYearMonthJsonResponse withGetYearMonthJson200ApplicationJsonObject(GetYearMonthJson200ApplicationJson getYearMonthJSON200ApplicationJSONObject) {
        this.getYearMonthJSON200ApplicationJSONObject = getYearMonthJSON200ApplicationJSONObject;
        return this;
    }
}