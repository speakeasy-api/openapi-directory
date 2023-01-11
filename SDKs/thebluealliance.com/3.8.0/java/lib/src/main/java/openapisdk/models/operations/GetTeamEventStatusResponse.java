package openapisdk.models.operations;



public class GetTeamEventStatusResponse {
    public String contentType;
    public GetTeamEventStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamEventStatus teamEventStatus;
    public GetTeamEventStatusResponse withTeamEventStatus(openapisdk.models.shared.TeamEventStatus teamEventStatus) {
        this.teamEventStatus = teamEventStatus;
        return this;
    }
}