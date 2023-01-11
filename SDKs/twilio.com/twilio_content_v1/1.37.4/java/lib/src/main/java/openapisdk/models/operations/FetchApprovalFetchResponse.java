package openapisdk.models.operations;



public class FetchApprovalFetchResponse {
    public String contentType;
    public FetchApprovalFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchApprovalFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ContentV1ContentApprovalFetch contentV1ContentApprovalFetch;
    public FetchApprovalFetchResponse withContentV1ContentApprovalFetch(openapisdk.models.shared.ContentV1ContentApprovalFetch contentV1ContentApprovalFetch) {
        this.contentV1ContentApprovalFetch = contentV1ContentApprovalFetch;
        return this;
    }
}