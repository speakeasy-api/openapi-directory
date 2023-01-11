package openapisdk.models.operations;



public class VaultMattersHoldsUpdateResponse {
    public String contentType;
    public VaultMattersHoldsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Hold hold;
    public VaultMattersHoldsUpdateResponse withHold(openapisdk.models.shared.Hold hold) {
        this.hold = hold;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}