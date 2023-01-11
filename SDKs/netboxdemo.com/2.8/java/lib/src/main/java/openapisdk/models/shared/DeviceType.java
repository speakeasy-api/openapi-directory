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

public class DeviceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public DeviceType withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public DeviceType withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public DeviceType withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_count")
    public Long deviceCount;
    public DeviceType withDeviceCount(Long deviceCount) {
        this.deviceCount = deviceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public DeviceType withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("front_image")
    public String frontImage;
    public DeviceType withFrontImage(String frontImage) {
        this.frontImage = frontImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DeviceType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_full_depth")
    public Boolean isFullDepth;
    public DeviceType withIsFullDepth(Boolean isFullDepth) {
        this.isFullDepth = isFullDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public DeviceType withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("manufacturer")
    public NestedManufacturer manufacturer;
    public DeviceType withManufacturer(NestedManufacturer manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("model")
    public String model;
    public DeviceType withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part_number")
    public String partNumber;
    public DeviceType withPartNumber(String partNumber) {
        this.partNumber = partNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rear_image")
    public String rearImage;
    public DeviceType withRearImage(String rearImage) {
        this.rearImage = rearImage;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public DeviceType withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subdevice_role")
    public DeviceTypeSubdeviceRole subdeviceRole;
    public DeviceType withSubdeviceRole(DeviceTypeSubdeviceRole subdeviceRole) {
        this.subdeviceRole = subdeviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public DeviceType withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("u_height")
    public Long uHeight;
    public DeviceType withUHeight(Long uHeight) {
        this.uHeight = uHeight;
        return this;
    }
}