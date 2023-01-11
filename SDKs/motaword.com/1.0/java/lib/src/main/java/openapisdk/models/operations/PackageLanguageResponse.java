package openapisdk.models.operations;



public class PackageLanguageResponse {
    public String contentType;
    public PackageLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PackageLanguageResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Package package_;
    public PackageLanguageResponse withPackage(openapisdk.models.shared.Package package_) {
        this.package_ = package_;
        return this;
    }
    public Long statusCode;
    public PackageLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] packageLanguage200ApplicationOctetStreamBinaryString;
    public PackageLanguageResponse withPackageLanguage200ApplicationOctetStreamBinaryString(byte[] packageLanguage200ApplicationOctetStreamBinaryString) {
        this.packageLanguage200ApplicationOctetStreamBinaryString = packageLanguage200ApplicationOctetStreamBinaryString;
        return this;
    }
}