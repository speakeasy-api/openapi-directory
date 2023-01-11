package openapisdk.models.operations;



public class GetPayoutsForPayorV3Response {
    public String contentType;
    public GetPayoutsForPayorV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPayoutsResponseV3 getPayoutsResponseV3;
    public GetPayoutsForPayorV3Response withGetPayoutsResponseV3(openapisdk.models.shared.GetPayoutsResponseV3 getPayoutsResponseV3) {
        this.getPayoutsResponseV3 = getPayoutsResponseV3;
        return this;
    }
    public Long statusCode;
    public GetPayoutsForPayorV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPayoutsForPayorV3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetPayoutsForPayorV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPayoutsForPayorV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPayoutsForPayorV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}