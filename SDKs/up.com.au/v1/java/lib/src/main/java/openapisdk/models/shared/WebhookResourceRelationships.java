package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookResourceRelationships {
    @JsonProperty("logs")
    public WebhookResourceRelationshipsLogs logs;
    public WebhookResourceRelationships withLogs(WebhookResourceRelationshipsLogs logs) {
        this.logs = logs;
        return this;
    }
}