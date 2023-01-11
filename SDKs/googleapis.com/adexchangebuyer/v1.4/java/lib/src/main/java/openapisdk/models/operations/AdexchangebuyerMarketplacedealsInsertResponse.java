package openapisdk.models.operations;



public class AdexchangebuyerMarketplacedealsInsertResponse {
    public openapisdk.models.shared.AddOrderDealsResponse addOrderDealsResponse;
    public AdexchangebuyerMarketplacedealsInsertResponse withAddOrderDealsResponse(openapisdk.models.shared.AddOrderDealsResponse addOrderDealsResponse) {
        this.addOrderDealsResponse = addOrderDealsResponse;
        return this;
    }
    public String contentType;
    public AdexchangebuyerMarketplacedealsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerMarketplacedealsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}