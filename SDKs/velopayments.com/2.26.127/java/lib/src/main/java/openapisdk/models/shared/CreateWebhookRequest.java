package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWebhookRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationHeader")
    public String authorizationHeader;
    public CreateWebhookRequest withAuthorizationHeader(String authorizationHeader) {
        this.authorizationHeader = authorizationHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public CategoryEnum[] categories;
    public CreateWebhookRequest withCategories(CategoryEnum[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public CreateWebhookRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("payorId")
    public String payorId;
    public CreateWebhookRequest withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonProperty("webhookUrl")
    public String webhookUrl;
    public CreateWebhookRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}