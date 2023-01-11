package openapisdk.models.operations;



public class VaultMattersExportsListResponse {
    public String contentType;
    public VaultMattersExportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListExportsResponse listExportsResponse;
    public VaultMattersExportsListResponse withListExportsResponse(openapisdk.models.shared.ListExportsResponse listExportsResponse) {
        this.listExportsResponse = listExportsResponse;
        return this;
    }
    public Long statusCode;
    public VaultMattersExportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}