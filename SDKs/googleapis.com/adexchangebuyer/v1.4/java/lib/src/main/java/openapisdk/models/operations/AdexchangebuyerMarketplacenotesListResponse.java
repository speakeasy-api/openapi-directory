package openapisdk.models.operations;



public class AdexchangebuyerMarketplacenotesListResponse {
    public String contentType;
    public AdexchangebuyerMarketplacenotesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrderNotesResponse getOrderNotesResponse;
    public AdexchangebuyerMarketplacenotesListResponse withGetOrderNotesResponse(openapisdk.models.shared.GetOrderNotesResponse getOrderNotesResponse) {
        this.getOrderNotesResponse = getOrderNotesResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerMarketplacenotesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}