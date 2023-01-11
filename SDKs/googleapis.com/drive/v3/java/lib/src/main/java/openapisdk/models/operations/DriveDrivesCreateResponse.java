package openapisdk.models.operations;



public class DriveDrivesCreateResponse {
    public String contentType;
    public DriveDrivesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Drive drive;
    public DriveDrivesCreateResponse withDrive(openapisdk.models.shared.Drive drive) {
        this.drive = drive;
        return this;
    }
    public Long statusCode;
    public DriveDrivesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}