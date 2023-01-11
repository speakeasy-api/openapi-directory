package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeviceAirInterface
 * Information about the device's air interface.
**/
public class SasPortalDeviceAirInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radioTechnology")
    public SasPortalDeviceAirInterfaceRadioTechnologyEnum radioTechnology;
    public SasPortalDeviceAirInterface withRadioTechnology(SasPortalDeviceAirInterfaceRadioTechnologyEnum radioTechnology) {
        this.radioTechnology = radioTechnology;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedSpec")
    public String supportedSpec;
    public SasPortalDeviceAirInterface withSupportedSpec(String supportedSpec) {
        this.supportedSpec = supportedSpec;
        return this;
    }
}