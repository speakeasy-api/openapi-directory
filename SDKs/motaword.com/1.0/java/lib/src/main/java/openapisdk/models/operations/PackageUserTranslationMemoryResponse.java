package openapisdk.models.operations;



public class PackageUserTranslationMemoryResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public PackageUserTranslationMemoryResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public PackageUserTranslationMemoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageUserTranslationMemoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] packageUserTranslationMemory200ApplicationXMLBinaryString;
    public PackageUserTranslationMemoryResponse withPackageUserTranslationMemory200ApplicationXmlBinaryString(byte[] packageUserTranslationMemory200ApplicationXMLBinaryString) {
        this.packageUserTranslationMemory200ApplicationXMLBinaryString = packageUserTranslationMemory200ApplicationXMLBinaryString;
        return this;
    }
}