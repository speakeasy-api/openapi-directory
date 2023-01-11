package openapisdk.models.operations;



public class AllServiceGroupsResponse {
    public String contentType;
    public AllServiceGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group[] groups;
    public AllServiceGroupsResponse withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
    public Long statusCode;
    public AllServiceGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}