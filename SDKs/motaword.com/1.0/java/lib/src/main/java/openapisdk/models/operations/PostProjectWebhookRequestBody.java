package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostProjectWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public PostProjectWebhookRequestBody withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
}