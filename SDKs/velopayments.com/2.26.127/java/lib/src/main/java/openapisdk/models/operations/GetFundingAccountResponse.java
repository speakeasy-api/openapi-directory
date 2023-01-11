package openapisdk.models.operations;



public class GetFundingAccountResponse {
    public String contentType;
    public GetFundingAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FundingAccountResponse fundingAccountResponse;
    public GetFundingAccountResponse withFundingAccountResponse(openapisdk.models.shared.FundingAccountResponse fundingAccountResponse) {
        this.fundingAccountResponse = fundingAccountResponse;
        return this;
    }
    public Long statusCode;
    public GetFundingAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public GetFundingAccountResponse withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetFundingAccountResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetFundingAccountResponse withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}