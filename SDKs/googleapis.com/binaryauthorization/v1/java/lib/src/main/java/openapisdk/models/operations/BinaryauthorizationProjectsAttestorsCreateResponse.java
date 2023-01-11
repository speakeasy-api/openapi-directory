package openapisdk.models.operations;



public class BinaryauthorizationProjectsAttestorsCreateResponse {
    public openapisdk.models.shared.Attestor attestor;
    public BinaryauthorizationProjectsAttestorsCreateResponse withAttestor(openapisdk.models.shared.Attestor attestor) {
        this.attestor = attestor;
        return this;
    }
    public String contentType;
    public BinaryauthorizationProjectsAttestorsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BinaryauthorizationProjectsAttestorsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}