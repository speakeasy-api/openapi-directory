package openapisdk.models.operations;



public class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerGroupsEnterprise runnerGroupsEnterprise;
    public EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse withRunnerGroupsEnterprise(openapisdk.models.shared.RunnerGroupsEnterprise runnerGroupsEnterprise) {
        this.runnerGroupsEnterprise = runnerGroupsEnterprise;
        return this;
    }
}