package openapisdk.models.operations;



public class DriveTeamdrivesInsertResponse {
    public String contentType;
    public DriveTeamdrivesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveTeamdrivesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDrive teamDrive;
    public DriveTeamdrivesInsertResponse withTeamDrive(openapisdk.models.shared.TeamDrive teamDrive) {
        this.teamDrive = teamDrive;
        return this;
    }
}