package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationUpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AddressUpdateModel address;
    public LocationUpdateModel withAddress(AddressUpdateModel address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminEmail")
    public String adminEmail;
    public LocationUpdateModel withAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminName")
    public String adminName;
    public LocationUpdateModel withAdminName(String adminName) {
        this.adminName = adminName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessHours")
    public BusinessHoursUpdateModel businessHours;
    public LocationUpdateModel withBusinessHours(BusinessHoursUpdateModel businessHours) {
        this.businessHours = businessHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaults")
    public BusinessDefaultsUpdateModel defaults;
    public LocationUpdateModel withDefaults(BusinessDefaultsUpdateModel defaults) {
        this.defaults = defaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public LocationUpdateModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public LocationUpdateModel withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendlyId")
    public String friendlyId;
    public LocationUpdateModel withFriendlyId(String friendlyId) {
        this.friendlyId = friendlyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCapacity")
    public Integer maxCapacity;
    public LocationUpdateModel withMaxCapacity(Integer maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxGroupSize")
    public Integer maxGroupSize;
    public LocationUpdateModel withMaxGroupSize(Integer maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocationUpdateModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public LocationUpdateModel withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionId")
    public String regionId;
    public LocationUpdateModel withRegionId(String regionId) {
        this.regionId = regionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public OnlineSettingsUpdateModel settings;
    public LocationUpdateModel withSettings(OnlineSettingsUpdateModel settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneName")
    public String timezoneName;
    public LocationUpdateModel withTimezoneName(String timezoneName) {
        this.timezoneName = timezoneName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public LocationUpdateModel withWebsite(String website) {
        this.website = website;
        return this;
    }
}