package openapisdk.models.operations;



public class AdexchangebuyerMarketplacedealsListResponse {
    public String contentType;
    public AdexchangebuyerMarketplacedealsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrderDealsResponse getOrderDealsResponse;
    public AdexchangebuyerMarketplacedealsListResponse withGetOrderDealsResponse(openapisdk.models.shared.GetOrderDealsResponse getOrderDealsResponse) {
        this.getOrderDealsResponse = getOrderDealsResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerMarketplacedealsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}