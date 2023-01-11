package openapisdk.models.operations;



public class DfareportingAdvertisersUpdateResponse {
    public openapisdk.models.shared.Advertiser advertiser;
    public DfareportingAdvertisersUpdateResponse withAdvertiser(openapisdk.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    public String contentType;
    public DfareportingAdvertisersUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertisersUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}