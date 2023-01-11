package openapisdk.models.operations;



public class DfareportingRemarketingListsUpdateResponse {
    public String contentType;
    public DfareportingRemarketingListsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingList remarketingList;
    public DfareportingRemarketingListsUpdateResponse withRemarketingList(openapisdk.models.shared.RemarketingList remarketingList) {
        this.remarketingList = remarketingList;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}