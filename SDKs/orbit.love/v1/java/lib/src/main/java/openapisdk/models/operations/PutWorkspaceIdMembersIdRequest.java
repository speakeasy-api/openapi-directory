package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkspaceIdMembersIdRequest {
    public PutWorkspaceIdMembersIdPathParams pathParams;
    public PutWorkspaceIdMembersIdRequest withPathParams(PutWorkspaceIdMembersIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Member request;
    public PutWorkspaceIdMembersIdRequest withRequest(openapisdk.models.shared.Member request) {
        this.request = request;
        return this;
    }
    public PutWorkspaceIdMembersIdSecurity security;
    public PutWorkspaceIdMembersIdRequest withSecurity(PutWorkspaceIdMembersIdSecurity security) {
        this.security = security;
        return this;
    }
}