package openapisdk.models.operations;



public class DfareportingRemarketingListsListResponse {
    public String contentType;
    public DfareportingRemarketingListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingListsListResponse remarketingListsListResponse;
    public DfareportingRemarketingListsListResponse withRemarketingListsListResponse(openapisdk.models.shared.RemarketingListsListResponse remarketingListsListResponse) {
        this.remarketingListsListResponse = remarketingListsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}