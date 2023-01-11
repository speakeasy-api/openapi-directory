package openapisdk.models.operations;



public class GetCompanyTimeOffTypesResponse {
    public String contentType;
    public GetCompanyTimeOffTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCompanyTimeOffTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCompanyTimeOffTypes200ApplicationJson getCompanyTimeOffTypes200ApplicationJSONObject;
    public GetCompanyTimeOffTypesResponse withGetCompanyTimeOffTypes200ApplicationJsonObject(GetCompanyTimeOffTypes200ApplicationJson getCompanyTimeOffTypes200ApplicationJSONObject) {
        this.getCompanyTimeOffTypes200ApplicationJSONObject = getCompanyTimeOffTypes200ApplicationJSONObject;
        return this;
    }
}