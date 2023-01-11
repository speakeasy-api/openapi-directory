package openapisdk.models.operations;



public class CommitteeDetailCommitteesCommitteeIdGetResponse {
    public openapisdk.models.shared.Committee committee;
    public CommitteeDetailCommitteesCommitteeIdGetResponse withCommittee(openapisdk.models.shared.Committee committee) {
        this.committee = committee;
        return this;
    }
    public String contentType;
    public CommitteeDetailCommitteesCommitteeIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CommitteeDetailCommitteesCommitteeIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public CommitteeDetailCommitteesCommitteeIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}