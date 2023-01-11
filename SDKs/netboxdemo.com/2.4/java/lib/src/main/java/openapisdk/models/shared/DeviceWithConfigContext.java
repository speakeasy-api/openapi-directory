package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DeviceWithConfigContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_tag")
    public String assetTag;
    public DeviceWithConfigContext withAssetTag(String assetTag) {
        this.assetTag = assetTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public NestedCluster cluster;
    public DeviceWithConfigContext withCluster(NestedCluster cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public DeviceWithConfigContext withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_context")
    public String configContext;
    public DeviceWithConfigContext withConfigContext(String configContext) {
        this.configContext = configContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public DeviceWithConfigContext withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public DeviceWithConfigContext withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonProperty("device_role")
    public NestedDeviceRole deviceRole;
    public DeviceWithConfigContext withDeviceRole(NestedDeviceRole deviceRole) {
        this.deviceRole = deviceRole;
        return this;
    }
    @JsonProperty("device_type")
    public NestedDeviceType deviceType;
    public DeviceWithConfigContext withDeviceType(NestedDeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public DeviceWithConfigContext withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("face")
    public DeviceWithConfigContextFace face;
    public DeviceWithConfigContext withFace(DeviceWithConfigContextFace face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DeviceWithConfigContext withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public DeviceWithConfigContext withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_context_data")
    public String localContextData;
    public DeviceWithConfigContext withLocalContextData(String localContextData) {
        this.localContextData = localContextData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeviceWithConfigContext withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_device")
    public String parentDevice;
    public DeviceWithConfigContext withParentDevice(String parentDevice) {
        this.parentDevice = parentDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public NestedPlatform platform;
    public DeviceWithConfigContext withPlatform(NestedPlatform platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public DeviceWithConfigContext withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip")
    public DeviceIpAddress primaryIp;
    public DeviceWithConfigContext withPrimaryIp(DeviceIpAddress primaryIp) {
        this.primaryIp = primaryIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip4")
    public DeviceIpAddress primaryIp4;
    public DeviceWithConfigContext withPrimaryIp4(DeviceIpAddress primaryIp4) {
        this.primaryIp4 = primaryIp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_ip6")
    public DeviceIpAddress primaryIp6;
    public DeviceWithConfigContext withPrimaryIp6(DeviceIpAddress primaryIp6) {
        this.primaryIp6 = primaryIp6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rack")
    public NestedRack rack;
    public DeviceWithConfigContext withRack(NestedRack rack) {
        this.rack = rack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public DeviceWithConfigContext withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonProperty("site")
    public NestedSite site;
    public DeviceWithConfigContext withSite(NestedSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DeviceWithConfigContextStatus status;
    public DeviceWithConfigContext withStatus(DeviceWithConfigContextStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public DeviceWithConfigContext withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public NestedTenant tenant;
    public DeviceWithConfigContext withTenant(NestedTenant tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vc_position")
    public Long vcPosition;
    public DeviceWithConfigContext withVcPosition(Long vcPosition) {
        this.vcPosition = vcPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vc_priority")
    public Long vcPriority;
    public DeviceWithConfigContext withVcPriority(Long vcPriority) {
        this.vcPriority = vcPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_chassis")
    public DeviceVirtualChassis virtualChassis;
    public DeviceWithConfigContext withVirtualChassis(DeviceVirtualChassis virtualChassis) {
        this.virtualChassis = virtualChassis;
        return this;
    }
}