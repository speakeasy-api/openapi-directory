package openapisdk.models.operations;



public class DatatransferTransfersGetResponse {
    public String contentType;
    public DatatransferTransfersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataTransfer dataTransfer;
    public DatatransferTransfersGetResponse withDataTransfer(openapisdk.models.shared.DataTransfer dataTransfer) {
        this.dataTransfer = dataTransfer;
        return this;
    }
    public Long statusCode;
    public DatatransferTransfersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}