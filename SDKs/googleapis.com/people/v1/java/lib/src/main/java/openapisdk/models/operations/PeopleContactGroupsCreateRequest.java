package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsCreateRequest {
    public PeopleContactGroupsCreateQueryParams queryParams;
    public PeopleContactGroupsCreateRequest withQueryParams(PeopleContactGroupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContactGroupRequestInput request;
    public PeopleContactGroupsCreateRequest withRequest(openapisdk.models.shared.CreateContactGroupRequestInput request) {
        this.request = request;
        return this;
    }
    public PeopleContactGroupsCreateSecurity security;
    public PeopleContactGroupsCreateRequest withSecurity(PeopleContactGroupsCreateSecurity security) {
        this.security = security;
        return this;
    }
}