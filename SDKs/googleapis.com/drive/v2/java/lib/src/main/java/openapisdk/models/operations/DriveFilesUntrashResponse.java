package openapisdk.models.operations;



public class DriveFilesUntrashResponse {
    public String contentType;
    public DriveFilesUntrashResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.File file;
    public DriveFilesUntrashResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
    public Long statusCode;
    public DriveFilesUntrashResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}