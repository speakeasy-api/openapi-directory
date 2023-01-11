package openapisdk.models.operations;



public class DfareportingRemarketingListsPatchResponse {
    public String contentType;
    public DfareportingRemarketingListsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingList remarketingList;
    public DfareportingRemarketingListsPatchResponse withRemarketingList(openapisdk.models.shared.RemarketingList remarketingList) {
        this.remarketingList = remarketingList;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}