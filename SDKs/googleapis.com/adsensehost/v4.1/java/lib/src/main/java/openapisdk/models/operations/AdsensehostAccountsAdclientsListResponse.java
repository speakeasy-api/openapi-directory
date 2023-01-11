package openapisdk.models.operations;



public class AdsensehostAccountsAdclientsListResponse {
    public openapisdk.models.shared.AdClients adClients;
    public AdsensehostAccountsAdclientsListResponse withAdClients(openapisdk.models.shared.AdClients adClients) {
        this.adClients = adClients;
        return this;
    }
    public String contentType;
    public AdsensehostAccountsAdclientsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAccountsAdclientsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}