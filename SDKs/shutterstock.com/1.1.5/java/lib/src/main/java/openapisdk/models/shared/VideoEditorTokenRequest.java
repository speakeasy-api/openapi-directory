package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoEditorTokenRequest
 * Request for a video editor user access token
**/
public class VideoEditorTokenRequest {
    @JsonProperty("userId")
    public String userId;
    public VideoEditorTokenRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}