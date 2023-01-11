package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhooksResponse
 * List Webhooks Object
**/
public class WebhooksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public WebhookResponse[] content;
    public WebhooksResponse withContent(WebhookResponse[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public WebhooksResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public WebhooksResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}