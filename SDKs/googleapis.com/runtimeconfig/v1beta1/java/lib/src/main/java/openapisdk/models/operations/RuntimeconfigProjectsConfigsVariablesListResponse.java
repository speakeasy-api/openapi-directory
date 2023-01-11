package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsVariablesListResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsVariablesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVariablesResponse listVariablesResponse;
    public RuntimeconfigProjectsConfigsVariablesListResponse withListVariablesResponse(openapisdk.models.shared.ListVariablesResponse listVariablesResponse) {
        this.listVariablesResponse = listVariablesResponse;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsVariablesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}