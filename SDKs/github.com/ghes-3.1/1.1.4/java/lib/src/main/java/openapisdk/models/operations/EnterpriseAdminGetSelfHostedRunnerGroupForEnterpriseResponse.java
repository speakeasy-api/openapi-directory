package openapisdk.models.operations;



public class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerGroupsEnterprise runnerGroupsEnterprise;
    public EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse withRunnerGroupsEnterprise(openapisdk.models.shared.RunnerGroupsEnterprise runnerGroupsEnterprise) {
        this.runnerGroupsEnterprise = runnerGroupsEnterprise;
        return this;
    }
}