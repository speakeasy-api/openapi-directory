package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAllowedNetworks200ApplicationJsonData
 * Information about the allowed_networks settings
**/
public class GetAllowedNetworks200ApplicationJsonData {
    @JsonProperty("settings")
    public GetAllowedNetworks200ApplicationJsonDataSettings settings;
    public GetAllowedNetworks200ApplicationJsonData withSettings(GetAllowedNetworks200ApplicationJsonDataSettings settings) {
        this.settings = settings;
        return this;
    }
}