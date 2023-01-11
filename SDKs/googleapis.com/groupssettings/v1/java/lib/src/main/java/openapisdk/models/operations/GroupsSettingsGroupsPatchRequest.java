package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GroupsSettingsGroupsPatchRequest {
    public GroupsSettingsGroupsPatchPathParams pathParams;
    public GroupsSettingsGroupsPatchRequest withPathParams(GroupsSettingsGroupsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsSettingsGroupsPatchQueryParams queryParams;
    public GroupsSettingsGroupsPatchRequest withQueryParams(GroupsSettingsGroupsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Groups request;
    public GroupsSettingsGroupsPatchRequest withRequest(openapisdk.models.shared.Groups request) {
        this.request = request;
        return this;
    }
    public GroupsSettingsGroupsPatchSecurity security;
    public GroupsSettingsGroupsPatchRequest withSecurity(GroupsSettingsGroupsPatchSecurity security) {
        this.security = security;
        return this;
    }
}