package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWebhookRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationHeader")
    public String authorizationHeader;
    public UpdateWebhookRequest withAuthorizationHeader(String authorizationHeader) {
        this.authorizationHeader = authorizationHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public CategoryEnum[] categories;
    public UpdateWebhookRequest withCategories(CategoryEnum[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateWebhookRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookUrl")
    public String webhookUrl;
    public UpdateWebhookRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}