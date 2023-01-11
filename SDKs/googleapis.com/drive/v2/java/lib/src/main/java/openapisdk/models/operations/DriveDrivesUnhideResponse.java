package openapisdk.models.operations;



public class DriveDrivesUnhideResponse {
    public String contentType;
    public DriveDrivesUnhideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Drive drive;
    public DriveDrivesUnhideResponse withDrive(openapisdk.models.shared.Drive drive) {
        this.drive = drive;
        return this;
    }
    public Long statusCode;
    public DriveDrivesUnhideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}