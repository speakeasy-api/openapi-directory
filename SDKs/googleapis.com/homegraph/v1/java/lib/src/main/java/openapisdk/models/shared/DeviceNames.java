package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceNames
 * Identifiers used to describe the device.
**/
public class DeviceNames {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultNames")
    public String[] defaultNames;
    public DeviceNames withDefaultNames(String[] defaultNames) {
        this.defaultNames = defaultNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeviceNames withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicknames")
    public String[] nicknames;
    public DeviceNames withNicknames(String[] nicknames) {
        this.nicknames = nicknames;
        return this;
    }
}