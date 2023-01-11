package openapisdk.models.operations;



public class DriveDrivesListResponse {
    public String contentType;
    public DriveDrivesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DriveList driveList;
    public DriveDrivesListResponse withDriveList(openapisdk.models.shared.DriveList driveList) {
        this.driveList = driveList;
        return this;
    }
    public Long statusCode;
    public DriveDrivesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}