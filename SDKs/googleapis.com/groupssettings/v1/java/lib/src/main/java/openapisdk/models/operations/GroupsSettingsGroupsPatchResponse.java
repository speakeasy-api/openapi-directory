package openapisdk.models.operations;



public class GroupsSettingsGroupsPatchResponse {
    public String contentType;
    public GroupsSettingsGroupsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Groups groups;
    public GroupsSettingsGroupsPatchResponse withGroups(openapisdk.models.shared.Groups groups) {
        this.groups = groups;
        return this;
    }
    public Long statusCode;
    public GroupsSettingsGroupsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}