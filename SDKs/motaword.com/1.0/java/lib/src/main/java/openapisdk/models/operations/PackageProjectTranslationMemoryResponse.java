package openapisdk.models.operations;



public class PackageProjectTranslationMemoryResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public PackageProjectTranslationMemoryResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public PackageProjectTranslationMemoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageProjectTranslationMemoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] packageProjectTranslationMemory200ApplicationXMLBinaryString;
    public PackageProjectTranslationMemoryResponse withPackageProjectTranslationMemory200ApplicationXmlBinaryString(byte[] packageProjectTranslationMemory200ApplicationXMLBinaryString) {
        this.packageProjectTranslationMemory200ApplicationXMLBinaryString = packageProjectTranslationMemory200ApplicationXMLBinaryString;
        return this;
    }
}