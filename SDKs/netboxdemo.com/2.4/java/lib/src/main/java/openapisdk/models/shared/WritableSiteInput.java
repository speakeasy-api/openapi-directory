package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableSiteInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asn")
    public Long asn;
    public WritableSiteInput withAsn(Long asn) {
        this.asn = asn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public WritableSiteInput withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_email")
    public String contactEmail;
    public WritableSiteInput withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_name")
    public String contactName;
    public WritableSiteInput withContactName(String contactName) {
        this.contactName = contactName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_phone")
    public String contactPhone;
    public WritableSiteInput withContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableSiteInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableSiteInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facility")
    public String facility;
    public WritableSiteInput withFacility(String facility) {
        this.facility = facility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public String latitude;
    public WritableSiteInput withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public String longitude;
    public WritableSiteInput withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableSiteInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physical_address")
    public String physicalAddress;
    public WritableSiteInput withPhysicalAddress(String physicalAddress) {
        this.physicalAddress = physicalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public Long region;
    public WritableSiteInput withRegion(Long region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping_address")
    public String shippingAddress;
    public WritableSiteInput withShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritableSiteInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public WritableSiteInput withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableSiteInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritableSiteInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_zone")
    public String timeZone;
    public WritableSiteInput withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}