package openapisdk.models.operations;



public class DriveDrivesInsertResponse {
    public String contentType;
    public DriveDrivesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Drive drive;
    public DriveDrivesInsertResponse withDrive(openapisdk.models.shared.Drive drive) {
        this.drive = drive;
        return this;
    }
    public Long statusCode;
    public DriveDrivesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}