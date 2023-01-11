package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNetworkSwitchStackRequestBody {
    @JsonProperty("name")
    public String name;
    public CreateNetworkSwitchStackRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("serials")
    public String[] serials;
    public CreateNetworkSwitchStackRequestBody withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
}