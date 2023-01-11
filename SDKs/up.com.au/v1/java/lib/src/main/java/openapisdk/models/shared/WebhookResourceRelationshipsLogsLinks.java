package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WebhookResourceRelationshipsLogsLinks {
    @JsonProperty("related")
    public String related;
    public WebhookResourceRelationshipsLogsLinks withRelated(String related) {
        this.related = related;
        return this;
    }
}