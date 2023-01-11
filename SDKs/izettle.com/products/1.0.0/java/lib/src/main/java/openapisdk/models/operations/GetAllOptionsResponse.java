package openapisdk.models.operations;



public class GetAllOptionsResponse {
    public String contentType;
    public GetAllOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VariantOptionsResponse[] variantOptionsResponses;
    public GetAllOptionsResponse withVariantOptionsResponses(openapisdk.models.shared.VariantOptionsResponse[] variantOptionsResponses) {
        this.variantOptionsResponses = variantOptionsResponses;
        return this;
    }
}