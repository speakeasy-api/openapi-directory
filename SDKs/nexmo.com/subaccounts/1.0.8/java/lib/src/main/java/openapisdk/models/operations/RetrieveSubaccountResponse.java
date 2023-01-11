package openapisdk.models.operations;



public class RetrieveSubaccountResponse {
    public String contentType;
    public RetrieveSubaccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveSubaccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subaccountResponse;
    public RetrieveSubaccountResponse withSubaccountResponse(Object subaccountResponse) {
        this.subaccountResponse = subaccountResponse;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public RetrieveSubaccountResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public RetrieveSubaccount401ApplicationJson retrieveSubaccount401ApplicationJSONObject;
    public RetrieveSubaccountResponse withRetrieveSubaccount401ApplicationJsonObject(RetrieveSubaccount401ApplicationJson retrieveSubaccount401ApplicationJSONObject) {
        this.retrieveSubaccount401ApplicationJSONObject = retrieveSubaccount401ApplicationJSONObject;
        return this;
    }
    public RetrieveSubaccount404ApplicationJson retrieveSubaccount404ApplicationJSONObject;
    public RetrieveSubaccountResponse withRetrieveSubaccount404ApplicationJsonObject(RetrieveSubaccount404ApplicationJson retrieveSubaccount404ApplicationJSONObject) {
        this.retrieveSubaccount404ApplicationJSONObject = retrieveSubaccount404ApplicationJSONObject;
        return this;
    }
}