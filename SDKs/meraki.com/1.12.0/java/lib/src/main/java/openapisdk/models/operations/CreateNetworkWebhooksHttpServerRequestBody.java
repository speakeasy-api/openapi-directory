package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkWebhooksHttpServerRequestBody {
    @JsonProperty("name")
    public String name;
    public CreateNetworkWebhooksHttpServerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedSecret")
    public String sharedSecret;
    public CreateNetworkWebhooksHttpServerRequestBody withSharedSecret(String sharedSecret) {
        this.sharedSecret = sharedSecret;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CreateNetworkWebhooksHttpServerRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}