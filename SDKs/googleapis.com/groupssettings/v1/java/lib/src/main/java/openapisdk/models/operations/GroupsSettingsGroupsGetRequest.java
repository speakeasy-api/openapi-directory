package openapisdk.models.operations;



public class GroupsSettingsGroupsGetRequest {
    public GroupsSettingsGroupsGetPathParams pathParams;
    public GroupsSettingsGroupsGetRequest withPathParams(GroupsSettingsGroupsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsSettingsGroupsGetQueryParams queryParams;
    public GroupsSettingsGroupsGetRequest withQueryParams(GroupsSettingsGroupsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GroupsSettingsGroupsGetSecurity security;
    public GroupsSettingsGroupsGetRequest withSecurity(GroupsSettingsGroupsGetSecurity security) {
        this.security = security;
        return this;
    }
}