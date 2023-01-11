package openapisdk.models.operations;



public class DriveTeamdrivesCreateResponse {
    public String contentType;
    public DriveTeamdrivesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveTeamdrivesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDrive teamDrive;
    public DriveTeamdrivesCreateResponse withTeamDrive(openapisdk.models.shared.TeamDrive teamDrive) {
        this.teamDrive = teamDrive;
        return this;
    }
}