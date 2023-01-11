package openapisdk.models.operations;



public class ListFundingAuditDeltasResponse {
    public String contentType;
    public ListFundingAuditDeltasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse;
    public ListFundingAuditDeltasResponse withPageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse(openapisdk.models.shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse) {
        this.pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse = pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse;
        return this;
    }
    public Long statusCode;
    public ListFundingAuditDeltasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public ListFundingAuditDeltasResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse401;
    public ListFundingAuditDeltasResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public ListFundingAuditDeltasResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}