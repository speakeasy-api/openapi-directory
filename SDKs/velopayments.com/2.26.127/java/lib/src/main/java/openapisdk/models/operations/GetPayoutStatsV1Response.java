package openapisdk.models.operations;



public class GetPayoutStatsV1Response {
    public String contentType;
    public GetPayoutStatsV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPayoutStatistics getPayoutStatistics;
    public GetPayoutStatsV1Response withGetPayoutStatistics(openapisdk.models.shared.GetPayoutStatistics getPayoutStatistics) {
        this.getPayoutStatistics = getPayoutStatistics;
        return this;
    }
    public Long statusCode;
    public GetPayoutStatsV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetPayoutStatsV1Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public GetPayoutStatsV1Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetPayoutStatsV1Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetPayoutStatsV1Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}