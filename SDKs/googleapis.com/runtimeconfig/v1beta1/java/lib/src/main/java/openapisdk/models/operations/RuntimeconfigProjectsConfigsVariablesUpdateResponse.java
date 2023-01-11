package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsVariablesUpdateResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsVariablesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsVariablesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Variable variable;
    public RuntimeconfigProjectsConfigsVariablesUpdateResponse withVariable(openapisdk.models.shared.Variable variable) {
        this.variable = variable;
        return this;
    }
}