package openapisdk.models.operations;



public class ProductGroupsResponse {
    public byte[] body;
    public ProductGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ProductGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public ProductGroupsResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public ProductGroupsResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Object[] productGroups;
    public ProductGroupsResponse withProductGroups(Object[] productGroups) {
        this.productGroups = productGroups;
        return this;
    }
    public Long statusCode;
    public ProductGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}