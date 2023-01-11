package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspaceIdMembersMemberIdIdentitiesRequest {
    public DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams pathParams;
    public DeleteWorkspaceIdMembersMemberIdIdentitiesRequest withPathParams(DeleteWorkspaceIdMembersMemberIdIdentitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Identity request;
    public DeleteWorkspaceIdMembersMemberIdIdentitiesRequest withRequest(openapisdk.models.shared.Identity request) {
        this.request = request;
        return this;
    }
    public DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity security;
    public DeleteWorkspaceIdMembersMemberIdIdentitiesRequest withSecurity(DeleteWorkspaceIdMembersMemberIdIdentitiesSecurity security) {
        this.security = security;
        return this;
    }
}