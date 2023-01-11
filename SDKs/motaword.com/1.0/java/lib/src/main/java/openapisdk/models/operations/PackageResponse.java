package openapisdk.models.operations;



public class PackageResponse {
    public String contentType;
    public PackageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PackageResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PackageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] package200ApplicationOctetStreamBinaryString;
    public PackageResponse withPackage200ApplicationOctetStreamBinaryString(byte[] package200ApplicationOctetStreamBinaryString) {
        this.package200ApplicationOctetStreamBinaryString = package200ApplicationOctetStreamBinaryString;
        return this;
    }
}