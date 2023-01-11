package openapisdk.models.operations;



public class PackageProjectTranslationMemoryForLanguageStatusResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public PackageProjectTranslationMemoryForLanguageStatusResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public PackageProjectTranslationMemoryForLanguageStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageProjectTranslationMemoryForLanguageStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}