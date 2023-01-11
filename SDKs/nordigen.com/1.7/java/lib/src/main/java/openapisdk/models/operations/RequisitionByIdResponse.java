package openapisdk.models.operations;



public class RequisitionByIdResponse {
    public String contentType;
    public RequisitionByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Requisition requisition;
    public RequisitionByIdResponse withRequisition(openapisdk.models.shared.Requisition requisition) {
        this.requisition = requisition;
        return this;
    }
    public Long statusCode;
    public RequisitionByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}