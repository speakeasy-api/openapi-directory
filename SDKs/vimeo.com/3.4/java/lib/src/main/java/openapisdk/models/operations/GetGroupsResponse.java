package openapisdk.models.operations;



public class GetGroupsResponse {
    public String contentType;
    public GetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Group[] groups;
    public GetGroupsResponse withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}