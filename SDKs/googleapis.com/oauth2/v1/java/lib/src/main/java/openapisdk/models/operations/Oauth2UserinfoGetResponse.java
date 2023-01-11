package openapisdk.models.operations;



public class Oauth2UserinfoGetResponse {
    public String contentType;
    public Oauth2UserinfoGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Oauth2UserinfoGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Userinfo userinfo;
    public Oauth2UserinfoGetResponse withUserinfo(openapisdk.models.shared.Userinfo userinfo) {
        this.userinfo = userinfo;
        return this;
    }
}