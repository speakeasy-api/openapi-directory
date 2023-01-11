package openapisdk.models.operations;



public class DriveFilesUpdateResponse {
    public String contentType;
    public DriveFilesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.File file;
    public DriveFilesUpdateResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
    public Long statusCode;
    public DriveFilesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}