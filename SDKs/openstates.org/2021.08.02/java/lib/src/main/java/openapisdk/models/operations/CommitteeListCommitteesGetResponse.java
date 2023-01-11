package openapisdk.models.operations;



public class CommitteeListCommitteesGetResponse {
    public openapisdk.models.shared.CommitteeList committeeList;
    public CommitteeListCommitteesGetResponse withCommitteeList(openapisdk.models.shared.CommitteeList committeeList) {
        this.committeeList = committeeList;
        return this;
    }
    public String contentType;
    public CommitteeListCommitteesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CommitteeListCommitteesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public CommitteeListCommitteesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}