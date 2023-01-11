package openapisdk.models.operations;



public class GetTeamAwardsByYearResponse {
    public openapisdk.models.shared.Award[] awards;
    public GetTeamAwardsByYearResponse withAwards(openapisdk.models.shared.Award[] awards) {
        this.awards = awards;
        return this;
    }
    public String contentType;
    public GetTeamAwardsByYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamAwardsByYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamAwardsByYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}