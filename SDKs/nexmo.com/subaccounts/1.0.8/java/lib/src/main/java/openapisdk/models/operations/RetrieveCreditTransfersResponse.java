package openapisdk.models.operations;



public class RetrieveCreditTransfersResponse {
    public String contentType;
    public RetrieveCreditTransfersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object listCreditTransfersResponse;
    public RetrieveCreditTransfersResponse withListCreditTransfersResponse(Object listCreditTransfersResponse) {
        this.listCreditTransfersResponse = listCreditTransfersResponse;
        return this;
    }
    public Long statusCode;
    public RetrieveCreditTransfersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public RetrieveCreditTransfersResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public RetrieveCreditTransfers401ApplicationJson retrieveCreditTransfers401ApplicationJSONObject;
    public RetrieveCreditTransfersResponse withRetrieveCreditTransfers401ApplicationJsonObject(RetrieveCreditTransfers401ApplicationJson retrieveCreditTransfers401ApplicationJSONObject) {
        this.retrieveCreditTransfers401ApplicationJSONObject = retrieveCreditTransfers401ApplicationJSONObject;
        return this;
    }
    public RetrieveCreditTransfers404ApplicationJson retrieveCreditTransfers404ApplicationJSONObject;
    public RetrieveCreditTransfersResponse withRetrieveCreditTransfers404ApplicationJsonObject(RetrieveCreditTransfers404ApplicationJson retrieveCreditTransfers404ApplicationJSONObject) {
        this.retrieveCreditTransfers404ApplicationJSONObject = retrieveCreditTransfers404ApplicationJSONObject;
        return this;
    }
}