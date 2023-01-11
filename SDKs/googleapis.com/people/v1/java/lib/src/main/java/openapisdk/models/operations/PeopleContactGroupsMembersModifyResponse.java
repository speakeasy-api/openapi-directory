package openapisdk.models.operations;



public class PeopleContactGroupsMembersModifyResponse {
    public String contentType;
    public PeopleContactGroupsMembersModifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ModifyContactGroupMembersResponse modifyContactGroupMembersResponse;
    public PeopleContactGroupsMembersModifyResponse withModifyContactGroupMembersResponse(openapisdk.models.shared.ModifyContactGroupMembersResponse modifyContactGroupMembersResponse) {
        this.modifyContactGroupMembersResponse = modifyContactGroupMembersResponse;
        return this;
    }
    public Long statusCode;
    public PeopleContactGroupsMembersModifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}