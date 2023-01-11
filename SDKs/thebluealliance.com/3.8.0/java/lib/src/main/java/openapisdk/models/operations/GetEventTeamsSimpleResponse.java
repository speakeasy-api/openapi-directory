package openapisdk.models.operations;



public class GetEventTeamsSimpleResponse {
    public String contentType;
    public GetEventTeamsSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventTeamsSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventTeamsSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSimple[] teamSimples;
    public GetEventTeamsSimpleResponse withTeamSimples(openapisdk.models.shared.TeamSimple[] teamSimples) {
        this.teamSimples = teamSimples;
        return this;
    }
}