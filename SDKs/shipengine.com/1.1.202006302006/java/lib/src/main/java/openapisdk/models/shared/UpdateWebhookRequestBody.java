package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateWebhookRequestBody
 * An update webhook request body
**/
public class UpdateWebhookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public java.util.Map<String, Object> url;
    public UpdateWebhookRequestBody withUrl(java.util.Map<String, Object> url) {
        this.url = url;
        return this;
    }
}