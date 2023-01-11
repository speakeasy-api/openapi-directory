package openapisdk.models.operations;



public class GetResourcesMediaIdSyndicateFormatResponse {
    public String contentType;
    public GetResourcesMediaIdSyndicateFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesMediaIdSyndicateFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyndicateMarshallerWrapped syndicateMarshallerWrapped;
    public GetResourcesMediaIdSyndicateFormatResponse withSyndicateMarshallerWrapped(openapisdk.models.shared.SyndicateMarshallerWrapped syndicateMarshallerWrapped) {
        this.syndicateMarshallerWrapped = syndicateMarshallerWrapped;
        return this;
    }
}