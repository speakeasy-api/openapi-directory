package openapisdk.models.operations;



public class DriveFilesInsertResponse {
    public String contentType;
    public DriveFilesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.File file;
    public DriveFilesInsertResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
    public Long statusCode;
    public DriveFilesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}