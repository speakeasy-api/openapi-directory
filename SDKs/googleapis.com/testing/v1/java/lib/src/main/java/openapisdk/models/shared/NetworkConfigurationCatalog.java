package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NetworkConfigurationCatalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurations")
    public NetworkConfiguration[] configurations;
    public NetworkConfigurationCatalog withConfigurations(NetworkConfiguration[] configurations) {
        this.configurations = configurations;
        return this;
    }
}