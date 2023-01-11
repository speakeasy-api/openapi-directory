package openapisdk.models.operations;



public class GetTeamAwardsResponse {
    public openapisdk.models.shared.Award[] awards;
    public GetTeamAwardsResponse withAwards(openapisdk.models.shared.Award[] awards) {
        this.awards = awards;
        return this;
    }
    public String contentType;
    public GetTeamAwardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamAwardsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamAwardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}