package openapisdk.models.operations;



public class GetSourceAccountV2Response {
    public String contentType;
    public GetSourceAccountV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SourceAccountResponseV2 sourceAccountResponseV2;
    public GetSourceAccountV2Response withSourceAccountResponseV2(openapisdk.models.shared.SourceAccountResponseV2 sourceAccountResponseV2) {
        this.sourceAccountResponseV2 = sourceAccountResponseV2;
        return this;
    }
    public Long statusCode;
    public GetSourceAccountV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetSourceAccountV2Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetSourceAccountV2Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetSourceAccountV2Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetSourceAccountV2Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}