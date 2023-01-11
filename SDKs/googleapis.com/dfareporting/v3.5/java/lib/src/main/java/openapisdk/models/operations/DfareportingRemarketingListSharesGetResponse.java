package openapisdk.models.operations;



public class DfareportingRemarketingListSharesGetResponse {
    public String contentType;
    public DfareportingRemarketingListSharesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingListShare remarketingListShare;
    public DfareportingRemarketingListSharesGetResponse withRemarketingListShare(openapisdk.models.shared.RemarketingListShare remarketingListShare) {
        this.remarketingListShare = remarketingListShare;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListSharesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}