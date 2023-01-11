package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetGithubActionsPermissionsOrganizationRequest {
    public ActionsSetGithubActionsPermissionsOrganizationPathParams pathParams;
    public ActionsSetGithubActionsPermissionsOrganizationRequest withPathParams(ActionsSetGithubActionsPermissionsOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsSetGithubActionsPermissionsOrganizationRequestBody request;
    public ActionsSetGithubActionsPermissionsOrganizationRequest withRequest(ActionsSetGithubActionsPermissionsOrganizationRequestBody request) {
        this.request = request;
        return this;
    }
}