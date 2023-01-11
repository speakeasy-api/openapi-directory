package openapisdk.models.operations;



public class CreateMemberElectionResponse {
    public String contentType;
    public CreateMemberElectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MemberElectionResult memberElectionResult;
    public CreateMemberElectionResponse withMemberElectionResult(openapisdk.models.shared.MemberElectionResult memberElectionResult) {
        this.memberElectionResult = memberElectionResult;
        return this;
    }
    public Long statusCode;
    public CreateMemberElectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}