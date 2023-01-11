package openapisdk.models.operations;



public class AdexchangebuyerMarketplacedealsUpdateResponse {
    public String contentType;
    public AdexchangebuyerMarketplacedealsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EditAllOrderDealsResponse editAllOrderDealsResponse;
    public AdexchangebuyerMarketplacedealsUpdateResponse withEditAllOrderDealsResponse(openapisdk.models.shared.EditAllOrderDealsResponse editAllOrderDealsResponse) {
        this.editAllOrderDealsResponse = editAllOrderDealsResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerMarketplacedealsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}