package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsSettingsGroupsUpdateRequest {
    public GroupsSettingsGroupsUpdatePathParams pathParams;
    public GroupsSettingsGroupsUpdateRequest withPathParams(GroupsSettingsGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsSettingsGroupsUpdateQueryParams queryParams;
    public GroupsSettingsGroupsUpdateRequest withQueryParams(GroupsSettingsGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Groups request;
    public GroupsSettingsGroupsUpdateRequest withRequest(openapisdk.models.shared.Groups request) {
        this.request = request;
        return this;
    }
    public GroupsSettingsGroupsUpdateSecurity security;
    public GroupsSettingsGroupsUpdateRequest withSecurity(GroupsSettingsGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}