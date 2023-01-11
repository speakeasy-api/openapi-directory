package openapisdk.models.operations;



public class Oauth2UserinfoV2MeGetResponse {
    public String contentType;
    public Oauth2UserinfoV2MeGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public Oauth2UserinfoV2MeGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Userinfo userinfo;
    public Oauth2UserinfoV2MeGetResponse withUserinfo(openapisdk.models.shared.Userinfo userinfo) {
        this.userinfo = userinfo;
        return this;
    }
}