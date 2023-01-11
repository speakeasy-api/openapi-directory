package openapisdk.models.operations;



public class DfareportingAdvertisersInsertResponse {
    public openapisdk.models.shared.Advertiser advertiser;
    public DfareportingAdvertisersInsertResponse withAdvertiser(openapisdk.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    public String contentType;
    public DfareportingAdvertisersInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertisersInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}