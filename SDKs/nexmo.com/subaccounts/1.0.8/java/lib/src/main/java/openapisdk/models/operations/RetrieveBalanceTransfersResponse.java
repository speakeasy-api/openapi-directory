package openapisdk.models.operations;



public class RetrieveBalanceTransfersResponse {
    public String contentType;
    public RetrieveBalanceTransfersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object listBalanceTransfersResponse;
    public RetrieveBalanceTransfersResponse withListBalanceTransfersResponse(Object listBalanceTransfersResponse) {
        this.listBalanceTransfersResponse = listBalanceTransfersResponse;
        return this;
    }
    public Long statusCode;
    public RetrieveBalanceTransfersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public RetrieveBalanceTransfersResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public RetrieveBalanceTransfers401ApplicationJson retrieveBalanceTransfers401ApplicationJSONObject;
    public RetrieveBalanceTransfersResponse withRetrieveBalanceTransfers401ApplicationJsonObject(RetrieveBalanceTransfers401ApplicationJson retrieveBalanceTransfers401ApplicationJSONObject) {
        this.retrieveBalanceTransfers401ApplicationJSONObject = retrieveBalanceTransfers401ApplicationJSONObject;
        return this;
    }
    public RetrieveBalanceTransfers404ApplicationJson retrieveBalanceTransfers404ApplicationJSONObject;
    public RetrieveBalanceTransfersResponse withRetrieveBalanceTransfers404ApplicationJsonObject(RetrieveBalanceTransfers404ApplicationJson retrieveBalanceTransfers404ApplicationJSONObject) {
        this.retrieveBalanceTransfers404ApplicationJSONObject = retrieveBalanceTransfers404ApplicationJSONObject;
        return this;
    }
}