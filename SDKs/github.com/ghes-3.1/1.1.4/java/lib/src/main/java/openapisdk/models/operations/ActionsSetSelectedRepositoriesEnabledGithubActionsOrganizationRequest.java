package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest {
    public ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams pathParams;
    public ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest withPathParams(ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody request;
    public ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest withRequest(ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody request) {
        this.request = request;
        return this;
    }
}