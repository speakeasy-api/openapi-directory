package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationTypes")
    public java.util.Map<String, Object> authenticationTypes;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods withAuthenticationTypes(java.util.Map<String, Object> authenticationTypes) {
        this.authenticationTypes = authenticationTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods withId(String id) {
        this.id = id;
        return this;
    }
}