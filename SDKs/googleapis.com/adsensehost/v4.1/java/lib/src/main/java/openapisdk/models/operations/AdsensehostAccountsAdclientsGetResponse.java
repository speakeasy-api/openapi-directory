package openapisdk.models.operations;



public class AdsensehostAccountsAdclientsGetResponse {
    public openapisdk.models.shared.AdClient adClient;
    public AdsensehostAccountsAdclientsGetResponse withAdClient(openapisdk.models.shared.AdClient adClient) {
        this.adClient = adClient;
        return this;
    }
    public String contentType;
    public AdsensehostAccountsAdclientsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAccountsAdclientsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}