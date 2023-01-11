package openapisdk.models.operations;



public class GetHealthcheckResultResponse {
    public String contentType;
    public GetHealthcheckResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHealthcheckResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetHealthcheckResult200ApplicationJson getHealthcheckResult200ApplicationJSONObject;
    public GetHealthcheckResultResponse withGetHealthcheckResult200ApplicationJsonObject(GetHealthcheckResult200ApplicationJson getHealthcheckResult200ApplicationJSONObject) {
        this.getHealthcheckResult200ApplicationJSONObject = getHealthcheckResult200ApplicationJSONObject;
        return this;
    }
}