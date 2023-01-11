package openapisdk.models.operations;



public class CreateProductSlugResponse {
    public String contentType;
    public CreateProductSlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SlugResponse slugResponse;
    public CreateProductSlugResponse withSlugResponse(openapisdk.models.shared.SlugResponse slugResponse) {
        this.slugResponse = slugResponse;
        return this;
    }
    public Long statusCode;
    public CreateProductSlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}