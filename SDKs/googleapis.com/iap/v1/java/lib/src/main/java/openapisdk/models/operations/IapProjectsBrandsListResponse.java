package openapisdk.models.operations;



public class IapProjectsBrandsListResponse {
    public String contentType;
    public IapProjectsBrandsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBrandsResponse listBrandsResponse;
    public IapProjectsBrandsListResponse withListBrandsResponse(openapisdk.models.shared.ListBrandsResponse listBrandsResponse) {
        this.listBrandsResponse = listBrandsResponse;
        return this;
    }
    public Long statusCode;
    public IapProjectsBrandsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}