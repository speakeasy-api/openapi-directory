package openapisdk.models.operations;



public class ContentOrderreportsListdisbursementsResponse {
    public String contentType;
    public ContentOrderreportsListdisbursementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderreportsListDisbursementsResponse orderreportsListDisbursementsResponse;
    public ContentOrderreportsListdisbursementsResponse withOrderreportsListDisbursementsResponse(openapisdk.models.shared.OrderreportsListDisbursementsResponse orderreportsListDisbursementsResponse) {
        this.orderreportsListDisbursementsResponse = orderreportsListDisbursementsResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrderreportsListdisbursementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}