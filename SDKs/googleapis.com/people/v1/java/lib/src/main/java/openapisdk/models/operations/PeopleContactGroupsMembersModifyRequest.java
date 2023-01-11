package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsMembersModifyRequest {
    public PeopleContactGroupsMembersModifyPathParams pathParams;
    public PeopleContactGroupsMembersModifyRequest withPathParams(PeopleContactGroupsMembersModifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeopleContactGroupsMembersModifyQueryParams queryParams;
    public PeopleContactGroupsMembersModifyRequest withQueryParams(PeopleContactGroupsMembersModifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyContactGroupMembersRequest request;
    public PeopleContactGroupsMembersModifyRequest withRequest(openapisdk.models.shared.ModifyContactGroupMembersRequest request) {
        this.request = request;
        return this;
    }
    public PeopleContactGroupsMembersModifySecurity security;
    public PeopleContactGroupsMembersModifyRequest withSecurity(PeopleContactGroupsMembersModifySecurity security) {
        this.security = security;
        return this;
    }
}