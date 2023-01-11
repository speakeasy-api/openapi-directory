package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableRackInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WritableRackInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableRackInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc_units")
    public Boolean descUnits;
    public WritableRackInput withDescUnits(Boolean descUnits) {
        this.descUnits = descUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facility_id")
    public String facilityId;
    public WritableRackInput withFacilityId(String facilityId) {
        this.facilityId = facilityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Long group;
    public WritableRackInput withGroup(Long group) {
        this.group = group;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableRackInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public Long role;
    public WritableRackInput withRole(Long role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public WritableRackInput withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonProperty("site")
    public Long site;
    public WritableRackInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableRackInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritableRackInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WritableRackInput withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("u_height")
    public Long uHeight;
    public WritableRackInput withUHeight(Long uHeight) {
        this.uHeight = uHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public WritableRackInput withWidth(Long width) {
        this.width = width;
        return this;
    }
}