package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateVideoEditorRequest
 * Request to update an existing instance of the video editor
**/
public class UpdateVideoEditorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageSubscriptionId")
    public String imageSubscriptionId;
    public UpdateVideoEditorRequest withImageSubscriptionId(String imageSubscriptionId) {
        this.imageSubscriptionId = imageSubscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoSubscriptionId")
    public String videoSubscriptionId;
    public UpdateVideoEditorRequest withVideoSubscriptionId(String videoSubscriptionId) {
        this.videoSubscriptionId = videoSubscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookUrl")
    public String webhookUrl;
    public UpdateVideoEditorRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}