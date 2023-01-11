package openapisdk.models.operations;



public class AdsensehostAdclientsListResponse {
    public openapisdk.models.shared.AdClients adClients;
    public AdsensehostAdclientsListResponse withAdClients(openapisdk.models.shared.AdClients adClients) {
        this.adClients = adClients;
        return this;
    }
    public String contentType;
    public AdsensehostAdclientsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAdclientsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}