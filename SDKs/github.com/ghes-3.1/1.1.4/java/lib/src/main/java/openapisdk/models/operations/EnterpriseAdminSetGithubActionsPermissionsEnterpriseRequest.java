package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest {
    public EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams pathParams;
    public EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest withPathParams(EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody request;
    public EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest withRequest(EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody request) {
        this.request = request;
        return this;
    }
}