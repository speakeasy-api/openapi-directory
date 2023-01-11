package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum format;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms withFormat(UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methods")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[] methods;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms withMethods(UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[] methods) {
        this.methods = methods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realm")
    public String realm;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms withRealm(String realm) {
        this.realm = realm;
        return this;
    }
}