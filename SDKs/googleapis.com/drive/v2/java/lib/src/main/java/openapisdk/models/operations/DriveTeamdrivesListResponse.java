package openapisdk.models.operations;



public class DriveTeamdrivesListResponse {
    public String contentType;
    public DriveTeamdrivesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveTeamdrivesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDriveList teamDriveList;
    public DriveTeamdrivesListResponse withTeamDriveList(openapisdk.models.shared.TeamDriveList teamDriveList) {
        this.teamDriveList = teamDriveList;
        return this;
    }
}