package openapisdk.models.operations;



public class AuthVideoEditorResponse {
    public String contentType;
    public AuthVideoEditorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AuthVideoEditorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoEditorTokenResponse videoEditorTokenResponse;
    public AuthVideoEditorResponse withVideoEditorTokenResponse(openapisdk.models.shared.VideoEditorTokenResponse videoEditorTokenResponse) {
        this.videoEditorTokenResponse = videoEditorTokenResponse;
        return this;
    }
}