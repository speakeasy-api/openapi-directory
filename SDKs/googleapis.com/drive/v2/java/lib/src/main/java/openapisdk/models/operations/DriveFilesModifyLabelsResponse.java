package openapisdk.models.operations;



public class DriveFilesModifyLabelsResponse {
    public String contentType;
    public DriveFilesModifyLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ModifyLabelsResponse modifyLabelsResponse;
    public DriveFilesModifyLabelsResponse withModifyLabelsResponse(openapisdk.models.shared.ModifyLabelsResponse modifyLabelsResponse) {
        this.modifyLabelsResponse = modifyLabelsResponse;
        return this;
    }
    public Long statusCode;
    public DriveFilesModifyLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}