package openapisdk.models.operations;



public class Oauth2TokeninfoResponse {
    public String contentType;
    public Oauth2TokeninfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Oauth2TokeninfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tokeninfo tokeninfo;
    public Oauth2TokeninfoResponse withTokeninfo(openapisdk.models.shared.Tokeninfo tokeninfo) {
        this.tokeninfo = tokeninfo;
        return this;
    }
}