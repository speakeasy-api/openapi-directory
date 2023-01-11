package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationHeader")
    public String authorizationHeader;
    public WebhookResponse withAuthorizationHeader(String authorizationHeader) {
        this.authorizationHeader = authorizationHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public CategoryEnum[] categories;
    public WebhookResponse withCategories(CategoryEnum[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public WebhookResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WebhookResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public WebhookResponse withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookUrl")
    public String webhookUrl;
    public WebhookResponse withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}