package openapisdk.models.operations;



public class GetMemberElectionResponse {
    public String contentType;
    public GetMemberElectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MemberElectionResult memberElectionResult;
    public GetMemberElectionResponse withMemberElectionResult(openapisdk.models.shared.MemberElectionResult memberElectionResult) {
        this.memberElectionResult = memberElectionResult;
        return this;
    }
    public Long statusCode;
    public GetMemberElectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}