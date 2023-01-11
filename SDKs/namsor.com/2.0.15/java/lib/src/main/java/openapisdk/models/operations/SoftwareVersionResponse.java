package openapisdk.models.operations;



public class SoftwareVersionResponse {
    public String contentType;
    public SoftwareVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SoftwareVersionOut softwareVersionOut;
    public SoftwareVersionResponse withSoftwareVersionOut(openapisdk.models.shared.SoftwareVersionOut softwareVersionOut) {
        this.softwareVersionOut = softwareVersionOut;
        return this;
    }
    public Long statusCode;
    public SoftwareVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}