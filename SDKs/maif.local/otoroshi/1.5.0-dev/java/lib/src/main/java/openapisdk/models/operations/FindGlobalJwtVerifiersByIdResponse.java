package openapisdk.models.operations;



public class FindGlobalJwtVerifiersByIdResponse {
    public String contentType;
    public FindGlobalJwtVerifiersByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier;
    public FindGlobalJwtVerifiersByIdResponse withGlobalJwtVerifier(openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier) {
        this.globalJwtVerifier = globalJwtVerifier;
        return this;
    }
    public Long statusCode;
    public FindGlobalJwtVerifiersByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}