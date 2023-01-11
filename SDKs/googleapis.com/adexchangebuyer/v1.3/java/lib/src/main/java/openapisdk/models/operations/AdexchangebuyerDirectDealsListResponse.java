package openapisdk.models.operations;



public class AdexchangebuyerDirectDealsListResponse {
    public String contentType;
    public AdexchangebuyerDirectDealsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectDealsList directDealsList;
    public AdexchangebuyerDirectDealsListResponse withDirectDealsList(openapisdk.models.shared.DirectDealsList directDealsList) {
        this.directDealsList = directDealsList;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerDirectDealsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}