package openapisdk.models.operations;



public class DfareportingAdvertisersGetResponse {
    public openapisdk.models.shared.Advertiser advertiser;
    public DfareportingAdvertisersGetResponse withAdvertiser(openapisdk.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    public String contentType;
    public DfareportingAdvertisersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertisersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}