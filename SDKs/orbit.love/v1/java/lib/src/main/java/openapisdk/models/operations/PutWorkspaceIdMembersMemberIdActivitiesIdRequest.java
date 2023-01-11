package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkspaceIdMembersMemberIdActivitiesIdRequest {
    public PutWorkspaceIdMembersMemberIdActivitiesIdPathParams pathParams;
    public PutWorkspaceIdMembersMemberIdActivitiesIdRequest withPathParams(PutWorkspaceIdMembersMemberIdActivitiesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Activity request;
    public PutWorkspaceIdMembersMemberIdActivitiesIdRequest withRequest(openapisdk.models.shared.Activity request) {
        this.request = request;
        return this;
    }
    public PutWorkspaceIdMembersMemberIdActivitiesIdSecurity security;
    public PutWorkspaceIdMembersMemberIdActivitiesIdRequest withSecurity(PutWorkspaceIdMembersMemberIdActivitiesIdSecurity security) {
        this.security = security;
        return this;
    }
}