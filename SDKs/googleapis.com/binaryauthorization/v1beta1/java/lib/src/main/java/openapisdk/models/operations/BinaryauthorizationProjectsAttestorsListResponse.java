package openapisdk.models.operations;



public class BinaryauthorizationProjectsAttestorsListResponse {
    public String contentType;
    public BinaryauthorizationProjectsAttestorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAttestorsResponse listAttestorsResponse;
    public BinaryauthorizationProjectsAttestorsListResponse withListAttestorsResponse(openapisdk.models.shared.ListAttestorsResponse listAttestorsResponse) {
        this.listAttestorsResponse = listAttestorsResponse;
        return this;
    }
    public Long statusCode;
    public BinaryauthorizationProjectsAttestorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}