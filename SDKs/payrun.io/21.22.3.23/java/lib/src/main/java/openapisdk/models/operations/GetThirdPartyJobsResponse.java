package openapisdk.models.operations;



public class GetThirdPartyJobsResponse {
    public String contentType;
    public GetThirdPartyJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetThirdPartyJobsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetThirdPartyJobsResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetThirdPartyJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}