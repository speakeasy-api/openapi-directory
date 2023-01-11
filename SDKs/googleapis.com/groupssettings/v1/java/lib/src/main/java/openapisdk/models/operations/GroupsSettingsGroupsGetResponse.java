package openapisdk.models.operations;



public class GroupsSettingsGroupsGetResponse {
    public String contentType;
    public GroupsSettingsGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Groups groups;
    public GroupsSettingsGroupsGetResponse withGroups(openapisdk.models.shared.Groups groups) {
        this.groups = groups;
        return this;
    }
    public Long statusCode;
    public GroupsSettingsGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}