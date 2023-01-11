package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookResourceRelationshipsLogs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public WebhookResourceRelationshipsLogsLinks links;
    public WebhookResourceRelationshipsLogs withLinks(WebhookResourceRelationshipsLogsLinks links) {
        this.links = links;
        return this;
    }
}