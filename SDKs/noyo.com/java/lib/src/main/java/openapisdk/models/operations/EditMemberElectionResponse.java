package openapisdk.models.operations;



public class EditMemberElectionResponse {
    public String contentType;
    public EditMemberElectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MemberElectionResult memberElectionResult;
    public EditMemberElectionResponse withMemberElectionResult(openapisdk.models.shared.MemberElectionResult memberElectionResult) {
        this.memberElectionResult = memberElectionResult;
        return this;
    }
    public Long statusCode;
    public EditMemberElectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}