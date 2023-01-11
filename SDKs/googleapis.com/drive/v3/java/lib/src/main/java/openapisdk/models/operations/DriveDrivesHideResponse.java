package openapisdk.models.operations;



public class DriveDrivesHideResponse {
    public String contentType;
    public DriveDrivesHideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Drive drive;
    public DriveDrivesHideResponse withDrive(openapisdk.models.shared.Drive drive) {
        this.drive = drive;
        return this;
    }
    public Long statusCode;
    public DriveDrivesHideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}