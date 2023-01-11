package openapisdk.models.operations;



public class DfareportingAdvertisersListResponse {
    public openapisdk.models.shared.AdvertisersListResponse advertisersListResponse;
    public DfareportingAdvertisersListResponse withAdvertisersListResponse(openapisdk.models.shared.AdvertisersListResponse advertisersListResponse) {
        this.advertisersListResponse = advertisersListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAdvertisersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAdvertisersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}