package openapisdk.models.operations;



public class GetQueryResponse {
    public openapisdk.models.shared.FourHundred fourHundred;
    public GetQueryResponse withFourHundred(openapisdk.models.shared.FourHundred fourHundred) {
        this.fourHundred = fourHundred;
        return this;
    }
    public String contentType;
    public GetQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetQuery200ApplicationJson getQuery200ApplicationJSONObject;
    public GetQueryResponse withGetQuery200ApplicationJsonObject(GetQuery200ApplicationJson getQuery200ApplicationJSONObject) {
        this.getQuery200ApplicationJSONObject = getQuery200ApplicationJSONObject;
        return this;
    }
}