package openapisdk.models.operations;



public class VaultMattersHoldsGetResponse {
    public String contentType;
    public VaultMattersHoldsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Hold hold;
    public VaultMattersHoldsGetResponse withHold(openapisdk.models.shared.Hold hold) {
        this.hold = hold;
        return this;
    }
    public Long statusCode;
    public VaultMattersHoldsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}