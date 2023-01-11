package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1Device
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
public class GoogleAppsCloudidentityDevicesV1Device {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidSpecificAttributes")
    public GoogleAppsCloudidentityDevicesV1AndroidAttributes androidSpecificAttributes;
    public GoogleAppsCloudidentityDevicesV1Device withAndroidSpecificAttributes(GoogleAppsCloudidentityDevicesV1AndroidAttributes androidSpecificAttributes) {
        this.androidSpecificAttributes = androidSpecificAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetTag")
    public String assetTag;
    public GoogleAppsCloudidentityDevicesV1Device withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basebandVersion")
    public String basebandVersion;
    public GoogleAppsCloudidentityDevicesV1Device withBasebandVersion(String basebandVersion) {
        this.basebandVersion = basebandVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootloaderVersion")
    public String bootloaderVersion;
    public GoogleAppsCloudidentityDevicesV1Device withBootloaderVersion(String bootloaderVersion) {
        this.bootloaderVersion = bootloaderVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public GoogleAppsCloudidentityDevicesV1Device withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildNumber")
    public String buildNumber;
    public GoogleAppsCloudidentityDevicesV1Device withBuildNumber(String buildNumber) {
        this.buildNumber = buildNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compromisedState")
    public GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum compromisedState;
    public GoogleAppsCloudidentityDevicesV1Device withCompromisedState(GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum compromisedState) {
        this.compromisedState = compromisedState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsCloudidentityDevicesV1Device withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public GoogleAppsCloudidentityDevicesV1Device withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum deviceType;
    public GoogleAppsCloudidentityDevicesV1Device withDeviceType(GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledDeveloperOptions")
    public Boolean enabledDeveloperOptions;
    public GoogleAppsCloudidentityDevicesV1Device withEnabledDeveloperOptions(Boolean enabledDeveloperOptions) {
        this.enabledDeveloperOptions = enabledDeveloperOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledUsbDebugging")
    public Boolean enabledUsbDebugging;
    public GoogleAppsCloudidentityDevicesV1Device withEnabledUsbDebugging(Boolean enabledUsbDebugging) {
        this.enabledUsbDebugging = enabledUsbDebugging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionState")
    public GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum encryptionState;
    public GoogleAppsCloudidentityDevicesV1Device withEncryptionState(GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum encryptionState) {
        this.encryptionState = encryptionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imei")
    public String imei;
    public GoogleAppsCloudidentityDevicesV1Device withImei(String imei) {
        this.imei = imei;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernelVersion")
    public String kernelVersion;
    public GoogleAppsCloudidentityDevicesV1Device withKernelVersion(String kernelVersion) {
        this.kernelVersion = kernelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSyncTime")
    public String lastSyncTime;
    public GoogleAppsCloudidentityDevicesV1Device withLastSyncTime(String lastSyncTime) {
        this.lastSyncTime = lastSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managementState")
    public GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum managementState;
    public GoogleAppsCloudidentityDevicesV1Device withManagementState(GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum managementState) {
        this.managementState = managementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public GoogleAppsCloudidentityDevicesV1Device withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meid")
    public String meid;
    public GoogleAppsCloudidentityDevicesV1Device withMeid(String meid) {
        this.meid = meid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleAppsCloudidentityDevicesV1Device withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsCloudidentityDevicesV1Device withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkOperator")
    public String networkOperator;
    public GoogleAppsCloudidentityDevicesV1Device withNetworkOperator(String networkOperator) {
        this.networkOperator = networkOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public GoogleAppsCloudidentityDevicesV1Device withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherAccounts")
    public String[] otherAccounts;
    public GoogleAppsCloudidentityDevicesV1Device withOtherAccounts(String[] otherAccounts) {
        this.otherAccounts = otherAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerType")
    public GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum ownerType;
    public GoogleAppsCloudidentityDevicesV1Device withOwnerType(GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum ownerType) {
        this.ownerType = ownerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseVersion")
    public String releaseVersion;
    public GoogleAppsCloudidentityDevicesV1Device withReleaseVersion(String releaseVersion) {
        this.releaseVersion = releaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityPatchTime")
    public String securityPatchTime;
    public GoogleAppsCloudidentityDevicesV1Device withSecurityPatchTime(String securityPatchTime) {
        this.securityPatchTime = securityPatchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public GoogleAppsCloudidentityDevicesV1Device withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiMacAddresses")
    public String[] wifiMacAddresses;
    public GoogleAppsCloudidentityDevicesV1Device withWifiMacAddresses(String[] wifiMacAddresses) {
        this.wifiMacAddresses = wifiMacAddresses;
        return this;
    }
}