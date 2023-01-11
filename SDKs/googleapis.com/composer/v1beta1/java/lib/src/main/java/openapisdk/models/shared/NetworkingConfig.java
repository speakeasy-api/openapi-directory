package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkingConfig
 * Configuration options for networking connections in the Composer 2 environment.
**/
public class NetworkingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionType")
    public NetworkingConfigConnectionTypeEnum connectionType;
    public NetworkingConfig withConnectionType(NetworkingConfigConnectionTypeEnum connectionType) {
        this.connectionType = connectionType;
        return this;
    }
}