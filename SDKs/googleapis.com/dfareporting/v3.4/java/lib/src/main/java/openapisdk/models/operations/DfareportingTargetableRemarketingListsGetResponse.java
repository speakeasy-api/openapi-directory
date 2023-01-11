package openapisdk.models.operations;



public class DfareportingTargetableRemarketingListsGetResponse {
    public String contentType;
    public DfareportingTargetableRemarketingListsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingTargetableRemarketingListsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetableRemarketingList targetableRemarketingList;
    public DfareportingTargetableRemarketingListsGetResponse withTargetableRemarketingList(openapisdk.models.shared.TargetableRemarketingList targetableRemarketingList) {
        this.targetableRemarketingList = targetableRemarketingList;
        return this;
    }
}