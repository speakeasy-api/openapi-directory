package openapisdk.models.operations;



public class FetchCertsResponse {
    public String contentType;
    public FetchCertsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCertsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OauthV1Certs oauthV1Certs;
    public FetchCertsResponse withOauthV1Certs(openapisdk.models.shared.OauthV1Certs oauthV1Certs) {
        this.oauthV1Certs = oauthV1Certs;
        return this;
    }
}