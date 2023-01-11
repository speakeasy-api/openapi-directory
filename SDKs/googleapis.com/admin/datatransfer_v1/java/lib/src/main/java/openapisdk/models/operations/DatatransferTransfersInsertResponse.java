package openapisdk.models.operations;



public class DatatransferTransfersInsertResponse {
    public String contentType;
    public DatatransferTransfersInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataTransfer dataTransfer;
    public DatatransferTransfersInsertResponse withDataTransfer(openapisdk.models.shared.DataTransfer dataTransfer) {
        this.dataTransfer = dataTransfer;
        return this;
    }
    public Long statusCode;
    public DatatransferTransfersInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}