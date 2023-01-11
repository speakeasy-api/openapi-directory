package openapisdk.models.operations;



public class DisplayvideoGoogleAudiencesGetResponse {
    public String contentType;
    public DisplayvideoGoogleAudiencesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleAudience googleAudience;
    public DisplayvideoGoogleAudiencesGetResponse withGoogleAudience(openapisdk.models.shared.GoogleAudience googleAudience) {
        this.googleAudience = googleAudience;
        return this;
    }
    public Long statusCode;
    public DisplayvideoGoogleAudiencesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}