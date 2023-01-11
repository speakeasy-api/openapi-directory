package openapisdk.models.operations;



public class GetSourceAccountsV3Response {
    public String contentType;
    public GetSourceAccountsV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSourceAccountResponseV3 listSourceAccountResponseV3;
    public GetSourceAccountsV3Response withListSourceAccountResponseV3(openapisdk.models.shared.ListSourceAccountResponseV3 listSourceAccountResponseV3) {
        this.listSourceAccountResponseV3 = listSourceAccountResponseV3;
        return this;
    }
    public Long statusCode;
    public GetSourceAccountsV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetSourceAccountsV3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetSourceAccountsV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetSourceAccountsV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetSourceAccountsV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}