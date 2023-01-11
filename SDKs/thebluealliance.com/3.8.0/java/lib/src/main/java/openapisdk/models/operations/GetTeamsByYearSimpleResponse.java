package openapisdk.models.operations;



public class GetTeamsByYearSimpleResponse {
    public String contentType;
    public GetTeamsByYearSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamsByYearSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamsByYearSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSimple[] teamSimples;
    public GetTeamsByYearSimpleResponse withTeamSimples(openapisdk.models.shared.TeamSimple[] teamSimples) {
        this.teamSimples = teamSimples;
        return this;
    }
}