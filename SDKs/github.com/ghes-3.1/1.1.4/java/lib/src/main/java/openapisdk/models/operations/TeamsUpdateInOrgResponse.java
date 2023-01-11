package openapisdk.models.operations;



public class TeamsUpdateInOrgResponse {
    public String contentType;
    public TeamsUpdateInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamFull teamFull;
    public TeamsUpdateInOrgResponse withTeamFull(openapisdk.models.shared.TeamFull teamFull) {
        this.teamFull = teamFull;
        return this;
    }
}