package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DevicePolicy
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
**/
public class DevicePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedDeviceManagementLevels")
    public DevicePolicyAllowedDeviceManagementLevelsEnum[] allowedDeviceManagementLevels;
    public DevicePolicy withAllowedDeviceManagementLevels(DevicePolicyAllowedDeviceManagementLevelsEnum[] allowedDeviceManagementLevels) {
        this.allowedDeviceManagementLevels = allowedDeviceManagementLevels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedEncryptionStatuses")
    public DevicePolicyAllowedEncryptionStatusesEnum[] allowedEncryptionStatuses;
    public DevicePolicy withAllowedEncryptionStatuses(DevicePolicyAllowedEncryptionStatusesEnum[] allowedEncryptionStatuses) {
        this.allowedEncryptionStatuses = allowedEncryptionStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osConstraints")
    public OsConstraint[] osConstraints;
    public DevicePolicy withOsConstraints(OsConstraint[] osConstraints) {
        this.osConstraints = osConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireAdminApproval")
    public Boolean requireAdminApproval;
    public DevicePolicy withRequireAdminApproval(Boolean requireAdminApproval) {
        this.requireAdminApproval = requireAdminApproval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireCorpOwned")
    public Boolean requireCorpOwned;
    public DevicePolicy withRequireCorpOwned(Boolean requireCorpOwned) {
        this.requireCorpOwned = requireCorpOwned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireScreenlock")
    public Boolean requireScreenlock;
    public DevicePolicy withRequireScreenlock(Boolean requireScreenlock) {
        this.requireScreenlock = requireScreenlock;
        return this;
    }
}