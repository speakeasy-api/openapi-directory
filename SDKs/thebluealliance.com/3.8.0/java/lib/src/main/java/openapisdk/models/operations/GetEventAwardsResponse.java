package openapisdk.models.operations;



public class GetEventAwardsResponse {
    public openapisdk.models.shared.Award[] awards;
    public GetEventAwardsResponse withAwards(openapisdk.models.shared.Award[] awards) {
        this.awards = awards;
        return this;
    }
    public String contentType;
    public GetEventAwardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventAwardsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventAwardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}