package openapisdk.models.operations;



public class GetTeamMediaByYearResponse {
    public String contentType;
    public GetTeamMediaByYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamMediaByYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Media[] media;
    public GetTeamMediaByYearResponse withMedia(openapisdk.models.shared.Media[] media) {
        this.media = media;
        return this;
    }
    public Long statusCode;
    public GetTeamMediaByYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}