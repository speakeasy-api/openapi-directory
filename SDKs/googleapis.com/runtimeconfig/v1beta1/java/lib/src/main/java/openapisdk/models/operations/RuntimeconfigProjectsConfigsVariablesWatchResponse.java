package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsVariablesWatchResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsVariablesWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsVariablesWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Variable variable;
    public RuntimeconfigProjectsConfigsVariablesWatchResponse withVariable(openapisdk.models.shared.Variable variable) {
        this.variable = variable;
        return this;
    }
}