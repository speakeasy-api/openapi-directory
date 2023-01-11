package openapisdk.models.operations;



public class PatchGlobalJwtVerifierResponse {
    public String contentType;
    public PatchGlobalJwtVerifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier;
    public PatchGlobalJwtVerifierResponse withGlobalJwtVerifier(openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier) {
        this.globalJwtVerifier = globalJwtVerifier;
        return this;
    }
    public Long statusCode;
    public PatchGlobalJwtVerifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}