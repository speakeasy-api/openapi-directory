package openapisdk.models.operations;



public class AdexchangebuyerDirectDealsGetResponse {
    public String contentType;
    public AdexchangebuyerDirectDealsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectDeal directDeal;
    public AdexchangebuyerDirectDealsGetResponse withDirectDeal(openapisdk.models.shared.DirectDeal directDeal) {
        this.directDeal = directDeal;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerDirectDealsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}