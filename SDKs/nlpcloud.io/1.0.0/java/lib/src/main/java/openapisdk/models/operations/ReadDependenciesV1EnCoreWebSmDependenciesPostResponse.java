package openapisdk.models.operations;



public class ReadDependenciesV1EnCoreWebSmDependenciesPostResponse {
    public String contentType;
    public ReadDependenciesV1EnCoreWebSmDependenciesPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DependenciesOut dependenciesOut;
    public ReadDependenciesV1EnCoreWebSmDependenciesPostResponse withDependenciesOut(openapisdk.models.shared.DependenciesOut dependenciesOut) {
        this.dependenciesOut = dependenciesOut;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ReadDependenciesV1EnCoreWebSmDependenciesPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public ReadDependenciesV1EnCoreWebSmDependenciesPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}