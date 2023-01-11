package openapisdk.models.operations;



public class DriveDrivesUpdateResponse {
    public String contentType;
    public DriveDrivesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Drive drive;
    public DriveDrivesUpdateResponse withDrive(openapisdk.models.shared.Drive drive) {
        this.drive = drive;
        return this;
    }
    public Long statusCode;
    public DriveDrivesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}