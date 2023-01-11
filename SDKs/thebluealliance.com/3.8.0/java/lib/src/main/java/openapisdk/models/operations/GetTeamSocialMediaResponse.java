package openapisdk.models.operations;



public class GetTeamSocialMediaResponse {
    public String contentType;
    public GetTeamSocialMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamSocialMediaResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Media[] media;
    public GetTeamSocialMediaResponse withMedia(openapisdk.models.shared.Media[] media) {
        this.media = media;
        return this;
    }
    public Long statusCode;
    public GetTeamSocialMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}