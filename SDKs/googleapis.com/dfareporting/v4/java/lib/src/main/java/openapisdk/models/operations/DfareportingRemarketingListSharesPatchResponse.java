package openapisdk.models.operations;



public class DfareportingRemarketingListSharesPatchResponse {
    public String contentType;
    public DfareportingRemarketingListSharesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingListShare remarketingListShare;
    public DfareportingRemarketingListSharesPatchResponse withRemarketingListShare(openapisdk.models.shared.RemarketingListShare remarketingListShare) {
        this.remarketingListShare = remarketingListShare;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListSharesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}