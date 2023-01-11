package openapisdk.models.operations;



public class DriveDrivesGetResponse {
    public String contentType;
    public DriveDrivesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Drive drive;
    public DriveDrivesGetResponse withDrive(openapisdk.models.shared.Drive drive) {
        this.drive = drive;
        return this;
    }
    public Long statusCode;
    public DriveDrivesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}