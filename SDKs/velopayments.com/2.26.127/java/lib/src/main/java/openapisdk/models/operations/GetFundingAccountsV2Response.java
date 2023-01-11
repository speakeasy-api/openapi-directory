package openapisdk.models.operations;



public class GetFundingAccountsV2Response {
    public String contentType;
    public GetFundingAccountsV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFundingAccountsResponse2 listFundingAccountsResponse2;
    public GetFundingAccountsV2Response withListFundingAccountsResponse2(openapisdk.models.shared.ListFundingAccountsResponse2 listFundingAccountsResponse2) {
        this.listFundingAccountsResponse2 = listFundingAccountsResponse2;
        return this;
    }
    public Long statusCode;
    public GetFundingAccountsV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse400;
    public GetFundingAccountsV2Response withInlineResponse400(Object inlineResponse400) {
        this.inlineResponse400 = inlineResponse400;
        return this;
    }
    public Object inlineResponse403;
    public GetFundingAccountsV2Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
}