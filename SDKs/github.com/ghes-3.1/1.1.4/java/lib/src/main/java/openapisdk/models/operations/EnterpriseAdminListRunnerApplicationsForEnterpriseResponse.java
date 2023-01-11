package openapisdk.models.operations;



public class EnterpriseAdminListRunnerApplicationsForEnterpriseResponse {
    public String contentType;
    public EnterpriseAdminListRunnerApplicationsForEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminListRunnerApplicationsForEnterpriseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerApplication[] runnerApplications;
    public EnterpriseAdminListRunnerApplicationsForEnterpriseResponse withRunnerApplications(openapisdk.models.shared.RunnerApplication[] runnerApplications) {
        this.runnerApplications = runnerApplications;
        return this;
    }
}