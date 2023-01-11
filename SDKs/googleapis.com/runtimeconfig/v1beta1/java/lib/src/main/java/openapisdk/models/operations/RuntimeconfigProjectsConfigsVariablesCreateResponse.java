package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsVariablesCreateResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsVariablesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsVariablesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Variable variable;
    public RuntimeconfigProjectsConfigsVariablesCreateResponse withVariable(openapisdk.models.shared.Variable variable) {
        this.variable = variable;
        return this;
    }
}