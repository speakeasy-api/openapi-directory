package openapisdk.models.operations;



public class AdexchangebuyerProposalsInsertResponse {
    public String contentType;
    public AdexchangebuyerProposalsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateOrdersResponse createOrdersResponse;
    public AdexchangebuyerProposalsInsertResponse withCreateOrdersResponse(openapisdk.models.shared.CreateOrdersResponse createOrdersResponse) {
        this.createOrdersResponse = createOrdersResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerProposalsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}