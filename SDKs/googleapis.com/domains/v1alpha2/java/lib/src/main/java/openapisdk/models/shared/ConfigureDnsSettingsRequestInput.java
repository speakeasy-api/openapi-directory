package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigureDnsSettingsRequestInput
 * Request for the `ConfigureDnsSettings` method.
**/
public class ConfigureDnsSettingsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsSettings")
    public DnsSettingsInput dnsSettings;
    public ConfigureDnsSettingsRequestInput withDnsSettings(DnsSettingsInput dnsSettings) {
        this.dnsSettings = dnsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public ConfigureDnsSettingsRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateOnly")
    public Boolean validateOnly;
    public ConfigureDnsSettingsRequestInput withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
}