package openapisdk.models.operations;



public class GetTeamMediaByTagResponse {
    public String contentType;
    public GetTeamMediaByTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamMediaByTagResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Media[] media;
    public GetTeamMediaByTagResponse withMedia(openapisdk.models.shared.Media[] media) {
        this.media = media;
        return this;
    }
    public Long statusCode;
    public GetTeamMediaByTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}