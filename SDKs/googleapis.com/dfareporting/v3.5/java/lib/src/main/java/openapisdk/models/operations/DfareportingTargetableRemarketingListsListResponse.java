package openapisdk.models.operations;



public class DfareportingTargetableRemarketingListsListResponse {
    public String contentType;
    public DfareportingTargetableRemarketingListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingTargetableRemarketingListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetableRemarketingListsListResponse targetableRemarketingListsListResponse;
    public DfareportingTargetableRemarketingListsListResponse withTargetableRemarketingListsListResponse(openapisdk.models.shared.TargetableRemarketingListsListResponse targetableRemarketingListsListResponse) {
        this.targetableRemarketingListsListResponse = targetableRemarketingListsListResponse;
        return this;
    }
}