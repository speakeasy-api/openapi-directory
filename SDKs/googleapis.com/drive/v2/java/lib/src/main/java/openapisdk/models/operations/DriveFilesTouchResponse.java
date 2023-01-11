package openapisdk.models.operations;



public class DriveFilesTouchResponse {
    public String contentType;
    public DriveFilesTouchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.File file;
    public DriveFilesTouchResponse withFile(openapisdk.models.shared.File file) {
        this.file = file;
        return this;
    }
    public Long statusCode;
    public DriveFilesTouchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}