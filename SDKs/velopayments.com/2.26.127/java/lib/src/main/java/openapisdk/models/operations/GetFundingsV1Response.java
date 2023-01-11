package openapisdk.models.operations;



public class GetFundingsV1Response {
    public String contentType;
    public GetFundingsV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFundingsResponse getFundingsResponse;
    public GetFundingsV1Response withGetFundingsResponse(openapisdk.models.shared.GetFundingsResponse getFundingsResponse) {
        this.getFundingsResponse = getFundingsResponse;
        return this;
    }
    public Long statusCode;
    public GetFundingsV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetFundingsV1Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetFundingsV1Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetFundingsV1Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetFundingsV1Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}