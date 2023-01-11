package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableDeviceTypeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WritableDeviceTypeInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableDeviceTypeInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_full_depth")
    public Boolean isFullDepth;
    public WritableDeviceTypeInput withIsFullDepth(Boolean isFullDepth) {
        this.isFullDepth = isFullDepth;
        return this;
    }
    @JsonProperty("manufacturer")
    public Long manufacturer;
    public WritableDeviceTypeInput withManufacturer(Long manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("model")
    public String model;
    public WritableDeviceTypeInput withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part_number")
    public String partNumber;
    public WritableDeviceTypeInput withPartNumber(String partNumber) {
        this.partNumber = partNumber;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritableDeviceTypeInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subdevice_role")
    public WritableDeviceTypeParentChildStatusEnum subdeviceRole;
    public WritableDeviceTypeInput withSubdeviceRole(WritableDeviceTypeParentChildStatusEnum subdeviceRole) {
        this.subdeviceRole = subdeviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableDeviceTypeInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("u_height")
    public Long uHeight;
    public WritableDeviceTypeInput withUHeight(Long uHeight) {
        this.uHeight = uHeight;
        return this;
    }
}