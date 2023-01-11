package openapisdk.models.operations;



public class AdexchangebuyerProposalsSearchResponse {
    public String contentType;
    public AdexchangebuyerProposalsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrdersResponse getOrdersResponse;
    public AdexchangebuyerProposalsSearchResponse withGetOrdersResponse(openapisdk.models.shared.GetOrdersResponse getOrdersResponse) {
        this.getOrdersResponse = getOrdersResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerProposalsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}