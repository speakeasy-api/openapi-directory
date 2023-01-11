package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidHotspot20RequestBodyOperator
 * Operator settings for this SSID
**/
public class UpdateNetworkWirelessSsidHotspot20RequestBodyOperator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyOperator withName(String name) {
        this.name = name;
        return this;
    }
}