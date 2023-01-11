package openapisdk.models.operations;



public class GetVariantSetsCollectionResponse {
    public String contentType;
    public GetVariantSetsCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PageOfVariantSets pageOfVariantSets;
    public GetVariantSetsCollectionResponse withPageOfVariantSets(openapisdk.models.shared.PageOfVariantSets pageOfVariantSets) {
        this.pageOfVariantSets = pageOfVariantSets;
        return this;
    }
    public Long statusCode;
    public GetVariantSetsCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}