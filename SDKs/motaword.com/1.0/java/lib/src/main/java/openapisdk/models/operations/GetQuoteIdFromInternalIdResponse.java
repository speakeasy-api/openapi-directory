package openapisdk.models.operations;



public class GetQuoteIdFromInternalIdResponse {
    public String contentType;
    public GetQuoteIdFromInternalIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetQuoteIdFromInternalIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetQuoteIdFromInternalIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetQuoteIdFromInternalId200ApplicationJson getQuoteIdFromInternalId200ApplicationJSONObject;
    public GetQuoteIdFromInternalIdResponse withGetQuoteIdFromInternalId200ApplicationJsonObject(GetQuoteIdFromInternalId200ApplicationJson getQuoteIdFromInternalId200ApplicationJSONObject) {
        this.getQuoteIdFromInternalId200ApplicationJSONObject = getQuoteIdFromInternalId200ApplicationJSONObject;
        return this;
    }
}