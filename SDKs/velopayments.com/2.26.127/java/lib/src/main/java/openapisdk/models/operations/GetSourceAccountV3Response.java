package openapisdk.models.operations;



public class GetSourceAccountV3Response {
    public String contentType;
    public GetSourceAccountV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourceAccountResponseV3 sourceAccountResponseV3;
    public GetSourceAccountV3Response withSourceAccountResponseV3(openapisdk.models.shared.SourceAccountResponseV3 sourceAccountResponseV3) {
        this.sourceAccountResponseV3 = sourceAccountResponseV3;
        return this;
    }
    public Long statusCode;
    public GetSourceAccountV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetSourceAccountV3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetSourceAccountV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetSourceAccountV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetSourceAccountV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}