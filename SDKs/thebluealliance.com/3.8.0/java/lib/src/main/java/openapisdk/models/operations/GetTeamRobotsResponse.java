package openapisdk.models.operations;



public class GetTeamRobotsResponse {
    public String contentType;
    public GetTeamRobotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamRobotsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamRobotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamRobot[] teamRobots;
    public GetTeamRobotsResponse withTeamRobots(openapisdk.models.shared.TeamRobot[] teamRobots) {
        this.teamRobots = teamRobots;
        return this;
    }
}