package openapisdk.models.operations;



public class GetTeamMediaByTagYearResponse {
    public String contentType;
    public GetTeamMediaByTagYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamMediaByTagYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Media[] media;
    public GetTeamMediaByTagYearResponse withMedia(openapisdk.models.shared.Media[] media) {
        this.media = media;
        return this;
    }
    public Long statusCode;
    public GetTeamMediaByTagYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}