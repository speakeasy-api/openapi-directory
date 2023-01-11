package openapisdk.models.operations;



public class GetVariantSetItemResponse {
    public String contentType;
    public GetVariantSetItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVariantSetItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VariantSet variantSet;
    public GetVariantSetItemResponse withVariantSet(openapisdk.models.shared.VariantSet variantSet) {
        this.variantSet = variantSet;
        return this;
    }
}