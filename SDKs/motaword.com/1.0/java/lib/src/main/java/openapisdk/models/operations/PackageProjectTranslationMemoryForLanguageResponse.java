package openapisdk.models.operations;



public class PackageProjectTranslationMemoryForLanguageResponse {
    public openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus;
    public PackageProjectTranslationMemoryForLanguageResponse withAsyncOperationStatus(openapisdk.models.shared.AsyncOperationStatus asyncOperationStatus) {
        this.asyncOperationStatus = asyncOperationStatus;
        return this;
    }
    public String contentType;
    public PackageProjectTranslationMemoryForLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageProjectTranslationMemoryForLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString;
    public PackageProjectTranslationMemoryForLanguageResponse withPackageProjectTranslationMemoryForLanguage200ApplicationXmlBinaryString(byte[] packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString) {
        this.packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString = packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString;
        return this;
    }
}