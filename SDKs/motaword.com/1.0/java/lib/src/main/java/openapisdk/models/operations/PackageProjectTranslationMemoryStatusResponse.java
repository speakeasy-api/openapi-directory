package openapisdk.models.operations;



public class PackageProjectTranslationMemoryStatusResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public PackageProjectTranslationMemoryStatusResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public PackageProjectTranslationMemoryStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageProjectTranslationMemoryStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}