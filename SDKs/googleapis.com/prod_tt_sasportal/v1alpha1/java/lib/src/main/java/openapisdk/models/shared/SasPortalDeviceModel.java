package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeviceModel
 * Information about the model of the device.
**/
public class SasPortalDeviceModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firmwareVersion")
    public String firmwareVersion;
    public SasPortalDeviceModel withFirmwareVersion(String firmwareVersion) {
        this.firmwareVersion = firmwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hardwareVersion")
    public String hardwareVersion;
    public SasPortalDeviceModel withHardwareVersion(String hardwareVersion) {
        this.hardwareVersion = hardwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SasPortalDeviceModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareVersion")
    public String softwareVersion;
    public SasPortalDeviceModel withSoftwareVersion(String softwareVersion) {
        this.softwareVersion = softwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public String vendor;
    public SasPortalDeviceModel withVendor(String vendor) {
        this.vendor = vendor;
        return this;
    }
}