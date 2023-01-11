package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MacSignResponse
 * Response message for KeyManagementService.MacSign.
**/
public class MacSignResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac")
    public String mac;
    public MacSignResponse withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macCrc32c")
    public String macCrc32c;
    public MacSignResponse withMacCrc32c(String macCrc32c) {
        this.macCrc32c = macCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MacSignResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public MacSignResponseProtectionLevelEnum protectionLevel;
    public MacSignResponse withProtectionLevel(MacSignResponseProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedDataCrc32c")
    public Boolean verifiedDataCrc32c;
    public MacSignResponse withVerifiedDataCrc32c(Boolean verifiedDataCrc32c) {
        this.verifiedDataCrc32c = verifiedDataCrc32c;
        return this;
    }
}