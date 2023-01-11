package openapisdk.models.operations;



public class VaultMattersHoldsCreateResponse {
    public String contentType;
    public VaultMattersHoldsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Hold hold;
    public VaultMattersHoldsCreateResponse withHold(openapisdk.models.shared.Hold hold) {
        this.hold = hold;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}