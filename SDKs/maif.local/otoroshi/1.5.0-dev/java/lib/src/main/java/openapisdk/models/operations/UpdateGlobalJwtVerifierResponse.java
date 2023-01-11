package openapisdk.models.operations;



public class UpdateGlobalJwtVerifierResponse {
    public String contentType;
    public UpdateGlobalJwtVerifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier;
    public UpdateGlobalJwtVerifierResponse withGlobalJwtVerifier(openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier) {
        this.globalJwtVerifier = globalJwtVerifier;
        return this;
    }
    public Long statusCode;
    public UpdateGlobalJwtVerifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}