package openapisdk.models.operations;



public class VaultMattersListResponse {
    public String contentType;
    public VaultMattersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMattersResponse listMattersResponse;
    public VaultMattersListResponse withListMattersResponse(openapisdk.models.shared.ListMattersResponse listMattersResponse) {
        this.listMattersResponse = listMattersResponse;
        return this;
    }
    public Long statusCode;
    public VaultMattersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}