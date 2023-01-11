package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkexportsV1ExportConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public BulkexportsV1ExportConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public BulkexportsV1ExportConfiguration withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public BulkexportsV1ExportConfiguration withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_method")
    public String webhookMethod;
    public BulkexportsV1ExportConfiguration withWebhookMethod(String webhookMethod) {
        this.webhookMethod = webhookMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_url")
    public String webhookUrl;
    public BulkexportsV1ExportConfiguration withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}