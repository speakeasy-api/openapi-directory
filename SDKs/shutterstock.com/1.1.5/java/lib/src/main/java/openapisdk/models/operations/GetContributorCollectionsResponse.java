package openapisdk.models.operations;



public class GetContributorCollectionsResponse {
    public openapisdk.models.shared.Collection collection;
    public GetContributorCollectionsResponse withCollection(openapisdk.models.shared.Collection collection) {
        this.collection = collection;
        return this;
    }
    public String contentType;
    public GetContributorCollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContributorCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}