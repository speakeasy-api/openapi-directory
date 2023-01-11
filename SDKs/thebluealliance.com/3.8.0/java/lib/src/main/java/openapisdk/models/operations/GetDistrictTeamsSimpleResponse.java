package openapisdk.models.operations;



public class GetDistrictTeamsSimpleResponse {
    public String contentType;
    public GetDistrictTeamsSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDistrictTeamsSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDistrictTeamsSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSimple[] teamSimples;
    public GetDistrictTeamsSimpleResponse withTeamSimples(openapisdk.models.shared.TeamSimple[] teamSimples) {
        this.teamSimples = teamSimples;
        return this;
    }
}