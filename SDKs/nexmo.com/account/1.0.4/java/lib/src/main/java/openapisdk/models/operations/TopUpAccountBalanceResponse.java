package openapisdk.models.operations;



public class TopUpAccountBalanceResponse {
    public byte[] body;
    public TopUpAccountBalanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TopUpAccountBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TopUpAccountBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Success success;
    public TopUpAccountBalanceResponse withSuccess(openapisdk.models.shared.Success success) {
        this.success = success;
        return this;
    }
    public Object topUpAccountBalance401ApplicationJSONOneOf;
    public TopUpAccountBalanceResponse withTopUpAccountBalance401ApplicationJsonOneOf(Object topUpAccountBalance401ApplicationJSONOneOf) {
        this.topUpAccountBalance401ApplicationJSONOneOf = topUpAccountBalance401ApplicationJSONOneOf;
        return this;
    }
}