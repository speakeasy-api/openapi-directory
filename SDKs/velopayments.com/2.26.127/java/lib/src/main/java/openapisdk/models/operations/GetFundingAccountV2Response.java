package openapisdk.models.operations;



public class GetFundingAccountV2Response {
    public String contentType;
    public GetFundingAccountV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FundingAccountResponse2 fundingAccountResponse2;
    public GetFundingAccountV2Response withFundingAccountResponse2(openapisdk.models.shared.FundingAccountResponse2 fundingAccountResponse2) {
        this.fundingAccountResponse2 = fundingAccountResponse2;
        return this;
    }
    public Long statusCode;
    public GetFundingAccountV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object inlineResponse401;
    public GetFundingAccountV2Response withInlineResponse401(Object inlineResponse401) {
        this.inlineResponse401 = inlineResponse401;
        return this;
    }
    public Object inlineResponse403;
    public GetFundingAccountV2Response withInlineResponse403(Object inlineResponse403) {
        this.inlineResponse403 = inlineResponse403;
        return this;
    }
    public Object inlineResponse404;
    public GetFundingAccountV2Response withInlineResponse404(Object inlineResponse404) {
        this.inlineResponse404 = inlineResponse404;
        return this;
    }
}