package openapisdk.models.operations;



public class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse {
    public byte[] body;
    public PostVisitorIdentificationV3TokensCreateGenerateTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostVisitorIdentificationV3TokensCreateGenerateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IdentificationTokenResponse identificationTokenResponse;
    public PostVisitorIdentificationV3TokensCreateGenerateTokenResponse withIdentificationTokenResponse(openapisdk.models.shared.IdentificationTokenResponse identificationTokenResponse) {
        this.identificationTokenResponse = identificationTokenResponse;
        return this;
    }
    public Long statusCode;
    public PostVisitorIdentificationV3TokensCreateGenerateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}