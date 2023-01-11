package openapisdk.models.operations;



public class DriveTeamdrivesUpdateResponse {
    public String contentType;
    public DriveTeamdrivesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveTeamdrivesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDrive teamDrive;
    public DriveTeamdrivesUpdateResponse withTeamDrive(openapisdk.models.shared.TeamDrive teamDrive) {
        this.teamDrive = teamDrive;
        return this;
    }
}