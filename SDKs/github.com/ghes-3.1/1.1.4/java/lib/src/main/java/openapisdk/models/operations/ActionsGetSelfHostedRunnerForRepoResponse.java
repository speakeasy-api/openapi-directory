package openapisdk.models.operations;



public class ActionsGetSelfHostedRunnerForRepoResponse {
    public String contentType;
    public ActionsGetSelfHostedRunnerForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetSelfHostedRunnerForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Runner runner;
    public ActionsGetSelfHostedRunnerForRepoResponse withRunner(openapisdk.models.shared.Runner runner) {
        this.runner = runner;
        return this;
    }
}