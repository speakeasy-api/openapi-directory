package openapisdk.models.operations;



public class DepositSwitchGetResponse {
    public String contentType;
    public DepositSwitchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> depositSwitchGetResponse;
    public DepositSwitchGetResponse withDepositSwitchGetResponse(java.util.Map<String, Object> depositSwitchGetResponse) {
        this.depositSwitchGetResponse = depositSwitchGetResponse;
        return this;
    }
    public Long statusCode;
    public DepositSwitchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}