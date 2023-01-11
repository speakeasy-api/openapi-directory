package openapisdk.models.operations;



public class GetDependentResponse {
    public String contentType;
    public GetDependentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DependentResult dependentResult;
    public GetDependentResponse withDependentResult(openapisdk.models.shared.DependentResult dependentResult) {
        this.dependentResult = dependentResult;
        return this;
    }
    public Long statusCode;
    public GetDependentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}