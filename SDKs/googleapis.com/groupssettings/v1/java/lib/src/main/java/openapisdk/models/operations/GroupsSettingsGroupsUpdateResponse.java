package openapisdk.models.operations;



public class GroupsSettingsGroupsUpdateResponse {
    public String contentType;
    public GroupsSettingsGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Groups groups;
    public GroupsSettingsGroupsUpdateResponse withGroups(openapisdk.models.shared.Groups groups) {
        this.groups = groups;
        return this;
    }
    public Long statusCode;
    public GroupsSettingsGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}