package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhooksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Webhook[] data;
    public WebhooksResponse withData(Webhook[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public WebhooksResponseError error;
    public WebhooksResponse withError(WebhooksResponseError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public WebhooksResponsePagination pagination;
    public WebhooksResponse withPagination(WebhooksResponsePagination pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public WebhooksResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}