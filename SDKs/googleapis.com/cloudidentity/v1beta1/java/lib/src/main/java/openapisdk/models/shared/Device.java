package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Device
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
public class Device {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidSpecificAttributes")
    public AndroidAttributes androidSpecificAttributes;
    public Device withAndroidSpecificAttributes(AndroidAttributes androidSpecificAttributes) {
        this.androidSpecificAttributes = androidSpecificAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTag")
    public String assetTag;
    public Device withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basebandVersion")
    public String basebandVersion;
    public Device withBasebandVersion(String basebandVersion) {
        this.basebandVersion = basebandVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootloaderVersion")
    public String bootloaderVersion;
    public Device withBootloaderVersion(String bootloaderVersion) {
        this.bootloaderVersion = bootloaderVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public Device withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildNumber")
    public String buildNumber;
    public Device withBuildNumber(String buildNumber) {
        this.buildNumber = buildNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientTypes")
    public DeviceClientTypesEnum[] clientTypes;
    public Device withClientTypes(DeviceClientTypesEnum[] clientTypes) {
        this.clientTypes = clientTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compromisedState")
    public DeviceCompromisedStateEnum compromisedState;
    public Device withCompromisedState(DeviceCompromisedStateEnum compromisedState) {
        this.compromisedState = compromisedState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Device withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public Device withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public DeviceDeviceTypeEnum deviceType;
    public Device withDeviceType(DeviceDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledDeveloperOptions")
    public Boolean enabledDeveloperOptions;
    public Device withEnabledDeveloperOptions(Boolean enabledDeveloperOptions) {
        this.enabledDeveloperOptions = enabledDeveloperOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledUsbDebugging")
    public Boolean enabledUsbDebugging;
    public Device withEnabledUsbDebugging(Boolean enabledUsbDebugging) {
        this.enabledUsbDebugging = enabledUsbDebugging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionState")
    public DeviceEncryptionStateEnum encryptionState;
    public Device withEncryptionState(DeviceEncryptionStateEnum encryptionState) {
        this.encryptionState = encryptionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointVerificationSpecificAttributes")
    public EndpointVerificationSpecificAttributes endpointVerificationSpecificAttributes;
    public Device withEndpointVerificationSpecificAttributes(EndpointVerificationSpecificAttributes endpointVerificationSpecificAttributes) {
        this.endpointVerificationSpecificAttributes = endpointVerificationSpecificAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public Device withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imei")
    public String imei;
    public Device withImei(String imei) {
        this.imei = imei;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernelVersion")
    public String kernelVersion;
    public Device withKernelVersion(String kernelVersion) {
        this.kernelVersion = kernelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSyncTime")
    public String lastSyncTime;
    public Device withLastSyncTime(String lastSyncTime) {
        this.lastSyncTime = lastSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managementState")
    public DeviceManagementStateEnum managementState;
    public Device withManagementState(DeviceManagementStateEnum managementState) {
        this.managementState = managementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public Device withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meid")
    public String meid;
    public Device withMeid(String meid) {
        this.meid = meid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public Device withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Device withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkOperator")
    public String networkOperator;
    public Device withNetworkOperator(String networkOperator) {
        this.networkOperator = networkOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public Device withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherAccounts")
    public String[] otherAccounts;
    public Device withOtherAccounts(String[] otherAccounts) {
        this.otherAccounts = otherAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerType")
    public DeviceOwnerTypeEnum ownerType;
    public Device withOwnerType(DeviceOwnerTypeEnum ownerType) {
        this.ownerType = ownerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseVersion")
    public String releaseVersion;
    public Device withReleaseVersion(String releaseVersion) {
        this.releaseVersion = releaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityPatchTime")
    public String securityPatchTime;
    public Device withSecurityPatchTime(String securityPatchTime) {
        this.securityPatchTime = securityPatchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public Device withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacAddresses")
    public String[] wifiMacAddresses;
    public Device withWifiMacAddresses(String[] wifiMacAddresses) {
        this.wifiMacAddresses = wifiMacAddresses;
        return this;
    }
}