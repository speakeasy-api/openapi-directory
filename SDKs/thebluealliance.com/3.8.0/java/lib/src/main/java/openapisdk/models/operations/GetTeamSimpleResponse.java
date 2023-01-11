package openapisdk.models.operations;



public class GetTeamSimpleResponse {
    public String contentType;
    public GetTeamSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSimple teamSimple;
    public GetTeamSimpleResponse withTeamSimple(openapisdk.models.shared.TeamSimple teamSimple) {
        this.teamSimple = teamSimple;
        return this;
    }
}