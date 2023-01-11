package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AddressInputModel address;
    public LocationInputModel withAddress(AddressInputModel address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminEmail")
    public String adminEmail;
    public LocationInputModel withAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminName")
    public String adminName;
    public LocationInputModel withAdminName(String adminName) {
        this.adminName = adminName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessHours")
    public BusinessHoursInputModel businessHours;
    public LocationInputModel withBusinessHours(BusinessHoursInputModel businessHours) {
        this.businessHours = businessHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaults")
    public BusinessDefaultsInputModel defaults;
    public LocationInputModel withDefaults(BusinessDefaultsInputModel defaults) {
        this.defaults = defaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public LocationInputModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public LocationInputModel withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendlyId")
    public String friendlyId;
    public LocationInputModel withFriendlyId(String friendlyId) {
        this.friendlyId = friendlyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCapacity")
    public Integer maxCapacity;
    public LocationInputModel withMaxCapacity(Integer maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxGroupSize")
    public Integer maxGroupSize;
    public LocationInputModel withMaxGroupSize(Integer maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocationInputModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public LocationInputModel withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionId")
    public String regionId;
    public LocationInputModel withRegionId(String regionId) {
        this.regionId = regionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public OnlineSettingsInputModel settings;
    public LocationInputModel withSettings(OnlineSettingsInputModel settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneName")
    public String timezoneName;
    public LocationInputModel withTimezoneName(String timezoneName) {
        this.timezoneName = timezoneName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public LocationInputModel withWebsite(String website) {
        this.website = website;
        return this;
    }
}