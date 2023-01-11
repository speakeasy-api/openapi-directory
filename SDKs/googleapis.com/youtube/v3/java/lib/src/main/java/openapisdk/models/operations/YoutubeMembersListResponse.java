package openapisdk.models.operations;



public class YoutubeMembersListResponse {
    public String contentType;
    public YoutubeMembersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MemberListResponse memberListResponse;
    public YoutubeMembersListResponse withMemberListResponse(openapisdk.models.shared.MemberListResponse memberListResponse) {
        this.memberListResponse = memberListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeMembersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}