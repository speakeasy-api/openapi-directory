package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsUpdateRequest {
    public PeopleContactGroupsUpdatePathParams pathParams;
    public PeopleContactGroupsUpdateRequest withPathParams(PeopleContactGroupsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeopleContactGroupsUpdateQueryParams queryParams;
    public PeopleContactGroupsUpdateRequest withQueryParams(PeopleContactGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateContactGroupRequestInput request;
    public PeopleContactGroupsUpdateRequest withRequest(openapisdk.models.shared.UpdateContactGroupRequestInput request) {
        this.request = request;
        return this;
    }
    public PeopleContactGroupsUpdateSecurity security;
    public PeopleContactGroupsUpdateRequest withSecurity(PeopleContactGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}