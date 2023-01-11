package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceSpec
 * The device spec used to generate a system APK.
**/
public class DeviceSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenDensity")
    public Long screenDensity;
    public DeviceSpec withScreenDensity(Long screenDensity) {
        this.screenDensity = screenDensity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedAbis")
    public String[] supportedAbis;
    public DeviceSpec withSupportedAbis(String[] supportedAbis) {
        this.supportedAbis = supportedAbis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedLocales")
    public String[] supportedLocales;
    public DeviceSpec withSupportedLocales(String[] supportedLocales) {
        this.supportedLocales = supportedLocales;
        return this;
    }
}