package openapisdk.models.operations;



public class GetPayoutsForPayorV4Response {
    public String contentType;
    public GetPayoutsForPayorV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPayoutsResponse getPayoutsResponse;
    public GetPayoutsForPayorV4Response withGetPayoutsResponse(openapisdk.models.shared.GetPayoutsResponse getPayoutsResponse) {
        this.getPayoutsResponse = getPayoutsResponse;
        return this;
    }
    public Long statusCode;
    public GetPayoutsForPayorV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPayoutsForPayorV4Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetPayoutsForPayorV4Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPayoutsForPayorV4Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPayoutsForPayorV4Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}