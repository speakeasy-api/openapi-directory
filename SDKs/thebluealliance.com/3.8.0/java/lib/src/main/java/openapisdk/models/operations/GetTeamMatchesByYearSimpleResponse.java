package openapisdk.models.operations;



public class GetTeamMatchesByYearSimpleResponse {
    public String contentType;
    public GetTeamMatchesByYearSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamMatchesByYearSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.MatchSimple[] matchSimples;
    public GetTeamMatchesByYearSimpleResponse withMatchSimples(openapisdk.models.shared.MatchSimple[] matchSimples) {
        this.matchSimples = matchSimples;
        return this;
    }
    public Long statusCode;
    public GetTeamMatchesByYearSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}