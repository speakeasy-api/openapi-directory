package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceMetadata
 * Characteristics of the user's device.
**/
public class DeviceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuMake")
    public String cpuMake;
    public DeviceMetadata withCpuMake(String cpuMake) {
        this.cpuMake = cpuMake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuModel")
    public String cpuModel;
    public DeviceMetadata withCpuModel(String cpuModel) {
        this.cpuModel = cpuModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceClass")
    public String deviceClass;
    public DeviceMetadata withDeviceClass(String deviceClass) {
        this.deviceClass = deviceClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glEsVersion")
    public Integer glEsVersion;
    public DeviceMetadata withGlEsVersion(Integer glEsVersion) {
        this.glEsVersion = glEsVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public DeviceMetadata withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativePlatform")
    public String nativePlatform;
    public DeviceMetadata withNativePlatform(String nativePlatform) {
        this.nativePlatform = nativePlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public DeviceMetadata withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramMb")
    public Integer ramMb;
    public DeviceMetadata withRamMb(Integer ramMb) {
        this.ramMb = ramMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenDensityDpi")
    public Integer screenDensityDpi;
    public DeviceMetadata withScreenDensityDpi(Integer screenDensityDpi) {
        this.screenDensityDpi = screenDensityDpi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenHeightPx")
    public Integer screenHeightPx;
    public DeviceMetadata withScreenHeightPx(Integer screenHeightPx) {
        this.screenHeightPx = screenHeightPx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenWidthPx")
    public Integer screenWidthPx;
    public DeviceMetadata withScreenWidthPx(Integer screenWidthPx) {
        this.screenWidthPx = screenWidthPx;
        return this;
    }
}