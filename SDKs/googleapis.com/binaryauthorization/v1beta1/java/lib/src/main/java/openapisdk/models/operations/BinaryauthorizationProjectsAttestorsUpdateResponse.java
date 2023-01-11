package openapisdk.models.operations;



public class BinaryauthorizationProjectsAttestorsUpdateResponse {
    public openapisdk.models.shared.Attestor attestor;
    public BinaryauthorizationProjectsAttestorsUpdateResponse withAttestor(openapisdk.models.shared.Attestor attestor) {
        this.attestor = attestor;
        return this;
    }
    public String contentType;
    public BinaryauthorizationProjectsAttestorsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BinaryauthorizationProjectsAttestorsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}