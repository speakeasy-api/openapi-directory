package openapisdk.models.operations;



public class DfareportingRemarketingListsGetResponse {
    public String contentType;
    public DfareportingRemarketingListsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RemarketingList remarketingList;
    public DfareportingRemarketingListsGetResponse withRemarketingList(openapisdk.models.shared.RemarketingList remarketingList) {
        this.remarketingList = remarketingList;
        return this;
    }
    public Long statusCode;
    public DfareportingRemarketingListsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}