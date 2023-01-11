package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkWebhooksWebhookTestRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedSecret")
    public String sharedSecret;
    public CreateNetworkWebhooksWebhookTestRequestBody withSharedSecret(String sharedSecret) {
        this.sharedSecret = sharedSecret;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CreateNetworkWebhooksWebhookTestRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}