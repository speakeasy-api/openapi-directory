package openapisdk.models.operations;



public class VaultMattersCloseResponse {
    public openapisdk.models.shared.CloseMatterResponse closeMatterResponse;
    public VaultMattersCloseResponse withCloseMatterResponse(openapisdk.models.shared.CloseMatterResponse closeMatterResponse) {
        this.closeMatterResponse = closeMatterResponse;
        return this;
    }
    public String contentType;
    public VaultMattersCloseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VaultMattersCloseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}