package openapisdk.models.operations;



public class ActionsListRunnerApplicationsForOrgResponse {
    public String contentType;
    public ActionsListRunnerApplicationsForOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsListRunnerApplicationsForOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RunnerApplication[] runnerApplications;
    public ActionsListRunnerApplicationsForOrgResponse withRunnerApplications(openapisdk.models.shared.RunnerApplication[] runnerApplications) {
        this.runnerApplications = runnerApplications;
        return this;
    }
}