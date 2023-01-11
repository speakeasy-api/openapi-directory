package openapisdk.models.operations;



public class EditDependentResponse {
    public String contentType;
    public EditDependentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DependentResult dependentResult;
    public EditDependentResponse withDependentResult(openapisdk.models.shared.DependentResult dependentResult) {
        this.dependentResult = dependentResult;
        return this;
    }
    public Long statusCode;
    public EditDependentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}