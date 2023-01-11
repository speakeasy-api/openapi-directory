package openapisdk.models.operations;



public class TransferNumberResponse {
    public String contentType;
    public TransferNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TransferNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferNumberResponse;
    public TransferNumberResponse withTransferNumberResponse(Object transferNumberResponse) {
        this.transferNumberResponse = transferNumberResponse;
        return this;
    }
    public TransferNumber401ApplicationJson transferNumber401ApplicationJSONObject;
    public TransferNumberResponse withTransferNumber401ApplicationJsonObject(TransferNumber401ApplicationJson transferNumber401ApplicationJSONObject) {
        this.transferNumber401ApplicationJSONObject = transferNumber401ApplicationJSONObject;
        return this;
    }
    public Object transferNumber403ApplicationJSONOneOf;
    public TransferNumberResponse withTransferNumber403ApplicationJsonOneOf(Object transferNumber403ApplicationJSONOneOf) {
        this.transferNumber403ApplicationJSONOneOf = transferNumber403ApplicationJSONOneOf;
        return this;
    }
    public Object transferNumber404ApplicationJSONOneOf;
    public TransferNumberResponse withTransferNumber404ApplicationJsonOneOf(Object transferNumber404ApplicationJSONOneOf) {
        this.transferNumber404ApplicationJSONOneOf = transferNumber404ApplicationJSONOneOf;
        return this;
    }
    public TransferNumber409ApplicationJson transferNumber409ApplicationJSONObject;
    public TransferNumberResponse withTransferNumber409ApplicationJsonObject(TransferNumber409ApplicationJson transferNumber409ApplicationJSONObject) {
        this.transferNumber409ApplicationJSONObject = transferNumber409ApplicationJSONObject;
        return this;
    }
    public TransferNumber422ApplicationJson transferNumber422ApplicationJSONObject;
    public TransferNumberResponse withTransferNumber422ApplicationJsonObject(TransferNumber422ApplicationJson transferNumber422ApplicationJSONObject) {
        this.transferNumber422ApplicationJSONObject = transferNumber422ApplicationJSONObject;
        return this;
    }
}