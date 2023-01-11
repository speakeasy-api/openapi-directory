package openapisdk.models.operations;



public class GetTeamEventAwardsResponse {
    public openapisdk.models.shared.Award[] awards;
    public GetTeamEventAwardsResponse withAwards(openapisdk.models.shared.Award[] awards) {
        this.awards = awards;
        return this;
    }
    public String contentType;
    public GetTeamEventAwardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventAwardsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventAwardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}