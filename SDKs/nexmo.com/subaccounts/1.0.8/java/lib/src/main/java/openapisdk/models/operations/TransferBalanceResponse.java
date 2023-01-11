package openapisdk.models.operations;



public class TransferBalanceResponse {
    public String contentType;
    public TransferBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TransferBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferBalanceResponse;
    public TransferBalanceResponse withTransferBalanceResponse(Object transferBalanceResponse) {
        this.transferBalanceResponse = transferBalanceResponse;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public TransferBalanceResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public TransferBalance401ApplicationJson transferBalance401ApplicationJSONObject;
    public TransferBalanceResponse withTransferBalance401ApplicationJsonObject(TransferBalance401ApplicationJson transferBalance401ApplicationJSONObject) {
        this.transferBalance401ApplicationJSONObject = transferBalance401ApplicationJSONObject;
        return this;
    }
    public TransferBalance404ApplicationJson transferBalance404ApplicationJSONObject;
    public TransferBalanceResponse withTransferBalance404ApplicationJsonObject(TransferBalance404ApplicationJson transferBalance404ApplicationJSONObject) {
        this.transferBalance404ApplicationJSONObject = transferBalance404ApplicationJSONObject;
        return this;
    }
    public TransferBalance422ApplicationJson transferBalance422ApplicationJSONObject;
    public TransferBalanceResponse withTransferBalance422ApplicationJsonObject(TransferBalance422ApplicationJson transferBalance422ApplicationJSONObject) {
        this.transferBalance422ApplicationJSONObject = transferBalance422ApplicationJSONObject;
        return this;
    }
}