package openapisdk.models.operations;



public class DatatransferTransfersListResponse {
    public String contentType;
    public DatatransferTransfersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataTransfersListResponse dataTransfersListResponse;
    public DatatransferTransfersListResponse withDataTransfersListResponse(openapisdk.models.shared.DataTransfersListResponse dataTransfersListResponse) {
        this.dataTransfersListResponse = dataTransfersListResponse;
        return this;
    }
    public Long statusCode;
    public DatatransferTransfersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}