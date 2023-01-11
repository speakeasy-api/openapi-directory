package openapisdk.models.operations;



public class UploadUserProfilePictureResponse {
    public String contentType;
    public UploadUserProfilePictureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UploadUserProfilePictureResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OperationStatus operationStatus;
    public UploadUserProfilePictureResponse withOperationStatus(openapisdk.models.shared.OperationStatus operationStatus) {
        this.operationStatus = operationStatus;
        return this;
    }
    public Long statusCode;
    public UploadUserProfilePictureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}