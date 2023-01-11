package openapisdk.models.operations;



public class IapProjectsBrandsCreateResponse {
    public openapisdk.models.shared.Brand brand;
    public IapProjectsBrandsCreateResponse withBrand(openapisdk.models.shared.Brand brand) {
        this.brand = brand;
        return this;
    }
    public String contentType;
    public IapProjectsBrandsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IapProjectsBrandsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}