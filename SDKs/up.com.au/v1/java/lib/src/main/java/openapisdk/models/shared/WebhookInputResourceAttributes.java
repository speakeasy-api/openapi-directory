package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookInputResourceAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WebhookInputResourceAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public WebhookInputResourceAttributes withUrl(String url) {
        this.url = url;
        return this;
    }
}