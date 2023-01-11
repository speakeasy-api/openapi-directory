package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoEditorTokenResponse
 * The response that includes the user access token and its expiration date
**/
public class VideoEditorTokenResponse {
    @JsonProperty("token")
    public VideoEditorTokenResponseToken token;
    public VideoEditorTokenResponse withToken(VideoEditorTokenResponseToken token) {
        this.token = token;
        return this;
    }
}