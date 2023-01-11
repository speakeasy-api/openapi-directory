package openapisdk.models.operations;



public class DfareportingRemarketingListSharesUpdateResponse {
    public String contentType;
    public DfareportingRemarketingListSharesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingListShare remarketingListShare;
    public DfareportingRemarketingListSharesUpdateResponse withRemarketingListShare(openapisdk.models.shared.RemarketingListShare remarketingListShare) {
        this.remarketingListShare = remarketingListShare;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListSharesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}