package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RegisterVideoEditorRequest
 * Request to register a new instance of the video editor
**/
public class RegisterVideoEditorRequest {
    @JsonProperty("imageSubscriptionId")
    public String imageSubscriptionId;
    public RegisterVideoEditorRequest withImageSubscriptionId(String imageSubscriptionId) {
        this.imageSubscriptionId = imageSubscriptionId;
        return this;
    }
    @JsonProperty("videoSubscriptionId")
    public String videoSubscriptionId;
    public RegisterVideoEditorRequest withVideoSubscriptionId(String videoSubscriptionId) {
        this.videoSubscriptionId = videoSubscriptionId;
        return this;
    }
    @JsonProperty("webhookUrl")
    public String webhookUrl;
    public RegisterVideoEditorRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}