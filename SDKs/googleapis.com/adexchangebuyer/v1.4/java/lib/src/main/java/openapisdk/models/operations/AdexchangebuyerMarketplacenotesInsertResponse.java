package openapisdk.models.operations;



public class AdexchangebuyerMarketplacenotesInsertResponse {
    public openapisdk.models.shared.AddOrderNotesResponse addOrderNotesResponse;
    public AdexchangebuyerMarketplacenotesInsertResponse withAddOrderNotesResponse(openapisdk.models.shared.AddOrderNotesResponse addOrderNotesResponse) {
        this.addOrderNotesResponse = addOrderNotesResponse;
        return this;
    }
    public String contentType;
    public AdexchangebuyerMarketplacenotesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerMarketplacenotesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}