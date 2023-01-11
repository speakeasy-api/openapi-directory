package openapisdk.models.operations;



public class AdexchangebuyerMarketplacedealsDeleteResponse {
    public String contentType;
    public AdexchangebuyerMarketplacedealsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteOrderDealsResponse deleteOrderDealsResponse;
    public AdexchangebuyerMarketplacedealsDeleteResponse withDeleteOrderDealsResponse(openapisdk.models.shared.DeleteOrderDealsResponse deleteOrderDealsResponse) {
        this.deleteOrderDealsResponse = deleteOrderDealsResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerMarketplacedealsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}