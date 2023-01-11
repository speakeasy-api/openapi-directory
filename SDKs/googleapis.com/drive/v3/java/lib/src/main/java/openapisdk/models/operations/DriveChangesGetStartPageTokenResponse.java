package openapisdk.models.operations;



public class DriveChangesGetStartPageTokenResponse {
    public String contentType;
    public DriveChangesGetStartPageTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartPageToken startPageToken;
    public DriveChangesGetStartPageTokenResponse withStartPageToken(openapisdk.models.shared.StartPageToken startPageToken) {
        this.startPageToken = startPageToken;
        return this;
    }
    public Long statusCode;
    public DriveChangesGetStartPageTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}