package openapisdk.models.operations;



public class QueryBatchStatusV4Response {
    public String contentType;
    public QueryBatchStatusV4Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryBatchResponse2 queryBatchResponse2;
    public QueryBatchStatusV4Response withQueryBatchResponse2(openapisdk.models.shared.QueryBatchResponse2 queryBatchResponse2) {
        this.queryBatchResponse2 = queryBatchResponse2;
        return this;
    }
    public Long statusCode;
    public QueryBatchStatusV4Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public QueryBatchStatusV4Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public QueryBatchStatusV4Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public QueryBatchStatusV4Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public QueryBatchStatusV4Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}