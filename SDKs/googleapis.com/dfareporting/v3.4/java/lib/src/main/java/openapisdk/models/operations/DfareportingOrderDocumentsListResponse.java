package openapisdk.models.operations;



public class DfareportingOrderDocumentsListResponse {
    public String contentType;
    public DfareportingOrderDocumentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderDocumentsListResponse orderDocumentsListResponse;
    public DfareportingOrderDocumentsListResponse withOrderDocumentsListResponse(openapisdk.models.shared.OrderDocumentsListResponse orderDocumentsListResponse) {
        this.orderDocumentsListResponse = orderDocumentsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingOrderDocumentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}