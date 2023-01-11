package openapisdk.models.operations;



public class GetFundingAccountsResponse {
    public String contentType;
    public GetFundingAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFundingAccountsResponse listFundingAccountsResponse;
    public GetFundingAccountsResponse withListFundingAccountsResponse(openapisdk.models.shared.ListFundingAccountsResponse listFundingAccountsResponse) {
        this.listFundingAccountsResponse = listFundingAccountsResponse;
        return this;
    }
    public Long statusCode;
    public GetFundingAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetFundingAccountsResponse withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public GetFundingAccountsResponse withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}