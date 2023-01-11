package openapisdk.models.operations;



public class CreateANewRequisitionResponse {
    public String contentType;
    public CreateANewRequisitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Requisition requisition;
    public CreateANewRequisitionResponse withRequisition(openapisdk.models.shared.Requisition requisition) {
        this.requisition = requisition;
        return this;
    }
    public Long statusCode;
    public CreateANewRequisitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}