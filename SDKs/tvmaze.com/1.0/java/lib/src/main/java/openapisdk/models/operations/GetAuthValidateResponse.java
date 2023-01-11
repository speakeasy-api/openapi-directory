package openapisdk.models.operations;



public class GetAuthValidateResponse {
    public String contentType;
    public GetAuthValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuthValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAuthValidate200ApplicationJson getAuthValidate200ApplicationJSONObject;
    public GetAuthValidateResponse withGetAuthValidate200ApplicationJsonObject(GetAuthValidate200ApplicationJson getAuthValidate200ApplicationJSONObject) {
        this.getAuthValidate200ApplicationJSONObject = getAuthValidate200ApplicationJSONObject;
        return this;
    }
}