package openapisdk.models.operations;



public class GetVariantSetsArchiveCollectionResponse {
    public String contentType;
    public GetVariantSetsArchiveCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PageOfVariantSets pageOfVariantSets;
    public GetVariantSetsArchiveCollectionResponse withPageOfVariantSets(openapisdk.models.shared.PageOfVariantSets pageOfVariantSets) {
        this.pageOfVariantSets = pageOfVariantSets;
        return this;
    }
    public Long statusCode;
    public GetVariantSetsArchiveCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}