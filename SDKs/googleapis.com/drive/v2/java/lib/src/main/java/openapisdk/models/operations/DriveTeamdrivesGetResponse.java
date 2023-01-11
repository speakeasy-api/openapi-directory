package openapisdk.models.operations;



public class DriveTeamdrivesGetResponse {
    public String contentType;
    public DriveTeamdrivesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveTeamdrivesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDrive teamDrive;
    public DriveTeamdrivesGetResponse withTeamDrive(openapisdk.models.shared.TeamDrive teamDrive) {
        this.teamDrive = teamDrive;
        return this;
    }
}