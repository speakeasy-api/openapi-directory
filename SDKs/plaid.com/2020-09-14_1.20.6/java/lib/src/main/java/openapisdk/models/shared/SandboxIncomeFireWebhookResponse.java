package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SandboxIncomeFireWebhookResponse
 * SandboxIncomeFireWebhookResponse defines the response schema for `/sandbox/income/fire_webhook`
**/
public class SandboxIncomeFireWebhookResponse {
    @JsonProperty("request_id")
    public String requestId;
    public SandboxIncomeFireWebhookResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}