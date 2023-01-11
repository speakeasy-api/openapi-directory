package openapisdk.models.operations;



public class TransferCreditResponse {
    public String contentType;
    public TransferCreditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TransferCreditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferCreditResponse;
    public TransferCreditResponse withTransferCreditResponse(Object transferCreditResponse) {
        this.transferCreditResponse = transferCreditResponse;
        return this;
    }
    public openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse;
    public TransferCreditResponse withUnprovisionedErrorResponse(openapisdk.models.shared.UnprovisionedErrorResponse unprovisionedErrorResponse) {
        this.unprovisionedErrorResponse = unprovisionedErrorResponse;
        return this;
    }
    public TransferCredit401ApplicationJson transferCredit401ApplicationJSONObject;
    public TransferCreditResponse withTransferCredit401ApplicationJsonObject(TransferCredit401ApplicationJson transferCredit401ApplicationJSONObject) {
        this.transferCredit401ApplicationJSONObject = transferCredit401ApplicationJSONObject;
        return this;
    }
    public TransferCredit404ApplicationJson transferCredit404ApplicationJSONObject;
    public TransferCreditResponse withTransferCredit404ApplicationJsonObject(TransferCredit404ApplicationJson transferCredit404ApplicationJSONObject) {
        this.transferCredit404ApplicationJSONObject = transferCredit404ApplicationJSONObject;
        return this;
    }
    public TransferCredit422ApplicationJson transferCredit422ApplicationJSONObject;
    public TransferCreditResponse withTransferCredit422ApplicationJsonObject(TransferCredit422ApplicationJson transferCredit422ApplicationJSONObject) {
        this.transferCredit422ApplicationJSONObject = transferCredit422ApplicationJSONObject;
        return this;
    }
}