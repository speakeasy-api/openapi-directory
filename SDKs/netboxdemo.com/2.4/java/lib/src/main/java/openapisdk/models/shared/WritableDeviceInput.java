package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableDeviceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_tag")
    public String assetTag;
    public WritableDeviceInput withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public Long cluster;
    public WritableDeviceInput withCluster(Long cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WritableDeviceInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableDeviceInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonProperty("device_role")
    public Long deviceRole;
    public WritableDeviceInput withDeviceRole(Long deviceRole) {
        this.deviceRole = deviceRole;
        return this;
    }
    @JsonProperty("device_type")
    public Long deviceType;
    public WritableDeviceInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("face")
    public Long face;
    public WritableDeviceInput withFace(Long face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_context_data")
    public String localContextData;
    public WritableDeviceInput withLocalContextData(String localContextData) {
        this.localContextData = localContextData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WritableDeviceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public Long platform;
    public WritableDeviceInput withPlatform(Long platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public WritableDeviceInput withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip4")
    public Long primaryIp4;
    public WritableDeviceInput withPrimaryIp4(Long primaryIp4) {
        this.primaryIp4 = primaryIp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip6")
    public Long primaryIp6;
    public WritableDeviceInput withPrimaryIp6(Long primaryIp6) {
        this.primaryIp6 = primaryIp6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rack")
    public Long rack;
    public WritableDeviceInput withRack(Long rack) {
        this.rack = rack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public WritableDeviceInput withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonProperty("site")
    public Long site;
    public WritableDeviceInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public WritableDeviceInput withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableDeviceInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritableDeviceInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vc_position")
    public Long vcPosition;
    public WritableDeviceInput withVcPosition(Long vcPosition) {
        this.vcPosition = vcPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vc_priority")
    public Long vcPriority;
    public WritableDeviceInput withVcPriority(Long vcPriority) {
        this.vcPriority = vcPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_chassis")
    public Long virtualChassis;
    public WritableDeviceInput withVirtualChassis(Long virtualChassis) {
        this.virtualChassis = virtualChassis;
        return this;
    }
}