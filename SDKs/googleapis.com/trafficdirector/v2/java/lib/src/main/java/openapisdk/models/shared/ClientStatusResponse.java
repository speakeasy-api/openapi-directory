package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClientStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ClientConfig[] config;
    public ClientStatusResponse withConfig(ClientConfig[] config) {
        this.config = config;
        return this;
    }
}