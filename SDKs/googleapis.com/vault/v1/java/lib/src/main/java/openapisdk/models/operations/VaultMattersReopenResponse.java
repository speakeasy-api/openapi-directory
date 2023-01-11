package openapisdk.models.operations;



public class VaultMattersReopenResponse {
    public String contentType;
    public VaultMattersReopenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReopenMatterResponse reopenMatterResponse;
    public VaultMattersReopenResponse withReopenMatterResponse(openapisdk.models.shared.ReopenMatterResponse reopenMatterResponse) {
        this.reopenMatterResponse = reopenMatterResponse;
        return this;
    }
    public Long statusCode;
    public VaultMattersReopenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}