package openapisdk.models.operations;



public class PackageUserTranslationMemoryForLanguageStatusResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public PackageUserTranslationMemoryForLanguageStatusResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public PackageUserTranslationMemoryForLanguageStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageUserTranslationMemoryForLanguageStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}