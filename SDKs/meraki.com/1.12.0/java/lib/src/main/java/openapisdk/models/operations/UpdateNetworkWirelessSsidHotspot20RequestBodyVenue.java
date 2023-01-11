package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidHotspot20RequestBodyVenue
 * Venue settings for this SSID
**/
public class UpdateNetworkWirelessSsidHotspot20RequestBodyVenue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyVenue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum type;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyVenue withType(UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum type) {
        this.type = type;
        return this;
    }
}