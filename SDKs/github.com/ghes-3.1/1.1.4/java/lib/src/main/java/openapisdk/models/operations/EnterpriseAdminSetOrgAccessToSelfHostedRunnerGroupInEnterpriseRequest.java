package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest {
    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams pathParams;
    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest withPathParams(EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody request;
    public EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest withRequest(EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody request) {
        this.request = request;
        return this;
    }
}