package openapisdk.models.operations;



public class GetUserByIdV2Response {
    public String contentType;
    public GetUserByIdV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserByIdV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse userResponse;
    public GetUserByIdV2Response withUserResponse(openapisdk.models.shared.UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
    public Object inlineResponse401;
    public GetUserByIdV2Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetUserByIdV2Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetUserByIdV2Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}