package openapisdk.models.operations;



public class DfareportingOrderDocumentsGetResponse {
    public String contentType;
    public DfareportingOrderDocumentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderDocument orderDocument;
    public DfareportingOrderDocumentsGetResponse withOrderDocument(openapisdk.models.shared.OrderDocument orderDocument) {
        this.orderDocument = orderDocument;
        return this;
    }
    public Long statusCode;
    public DfareportingOrderDocumentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}