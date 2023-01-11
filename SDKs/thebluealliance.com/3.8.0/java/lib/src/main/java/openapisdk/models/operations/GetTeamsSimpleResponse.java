package openapisdk.models.operations;



public class GetTeamsSimpleResponse {
    public String contentType;
    public GetTeamsSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamsSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamsSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSimple[] teamSimples;
    public GetTeamsSimpleResponse withTeamSimples(openapisdk.models.shared.TeamSimple[] teamSimples) {
        this.teamSimples = teamSimples;
        return this;
    }
}