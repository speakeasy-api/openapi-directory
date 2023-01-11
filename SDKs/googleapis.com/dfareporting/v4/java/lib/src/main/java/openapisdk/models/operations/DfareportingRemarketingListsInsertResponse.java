package openapisdk.models.operations;



public class DfareportingRemarketingListsInsertResponse {
    public String contentType;
    public DfareportingRemarketingListsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingList remarketingList;
    public DfareportingRemarketingListsInsertResponse withRemarketingList(openapisdk.models.shared.RemarketingList remarketingList) {
        this.remarketingList = remarketingList;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}