package openapisdk.models.operations;



public class CreateDependentResponse {
    public String contentType;
    public CreateDependentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DependentResult dependentResult;
    public CreateDependentResponse withDependentResult(openapisdk.models.shared.DependentResult dependentResult) {
        this.dependentResult = dependentResult;
        return this;
    }
    public Long statusCode;
    public CreateDependentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}