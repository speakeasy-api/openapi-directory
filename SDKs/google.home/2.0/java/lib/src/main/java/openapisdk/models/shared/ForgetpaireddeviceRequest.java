package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ForgetpaireddeviceRequest {
    @JsonProperty("bond")
    public Boolean bond;
    public ForgetpaireddeviceRequest withBond(Boolean bond) {
        this.bond = bond;
        return this;
    }
    @JsonProperty("mac_address")
    public String macAddress;
    public ForgetpaireddeviceRequest withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
}