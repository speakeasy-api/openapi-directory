package openapisdk.models.operations;



public class AdsensehostAdclientsGetResponse {
    public openapisdk.models.shared.AdClient adClient;
    public AdsensehostAdclientsGetResponse withAdClient(openapisdk.models.shared.AdClient adClient) {
        this.adClient = adClient;
        return this;
    }
    public String contentType;
    public AdsensehostAdclientsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAdclientsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}