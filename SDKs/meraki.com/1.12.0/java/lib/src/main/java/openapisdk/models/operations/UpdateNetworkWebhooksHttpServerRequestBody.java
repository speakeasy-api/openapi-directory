package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWebhooksHttpServerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkWebhooksHttpServerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedSecret")
    public String sharedSecret;
    public UpdateNetworkWebhooksHttpServerRequestBody withSharedSecret(String sharedSecret) {
        this.sharedSecret = sharedSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UpdateNetworkWebhooksHttpServerRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}