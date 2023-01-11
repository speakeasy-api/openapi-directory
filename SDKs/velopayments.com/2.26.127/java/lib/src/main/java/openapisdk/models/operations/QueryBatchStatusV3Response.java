package openapisdk.models.operations;



public class QueryBatchStatusV3Response {
    public String contentType;
    public QueryBatchStatusV3Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryBatchResponse queryBatchResponse;
    public QueryBatchStatusV3Response withQueryBatchResponse(openapisdk.models.shared.QueryBatchResponse queryBatchResponse) {
        this.queryBatchResponse = queryBatchResponse;
        return this;
    }
    public Long statusCode;
    public QueryBatchStatusV3Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public QueryBatchStatusV3Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public QueryBatchStatusV3Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public QueryBatchStatusV3Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public QueryBatchStatusV3Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}