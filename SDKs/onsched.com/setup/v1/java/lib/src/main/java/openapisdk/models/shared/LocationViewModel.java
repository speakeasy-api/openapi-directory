package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminEmail")
    public String adminEmail;
    public LocationViewModel withAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminName")
    public String adminName;
    public LocationViewModel withAdminName(String adminName) {
        this.adminName = adminName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyId")
    public String companyId;
    public LocationViewModel withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public LocationViewModel withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public LocationViewModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public LocationViewModel withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendlyId")
    public String friendlyId;
    public LocationViewModel withFriendlyId(String friendlyId) {
        this.friendlyId = friendlyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LocationViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public LocationViewModel withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public LocationViewModel withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public LocationViewModel withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public LocationViewModel withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCapacity")
    public Integer maxCapacity;
    public LocationViewModel withMaxCapacity(Integer maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxGroupSize")
    public Integer maxGroupSize;
    public LocationViewModel withMaxGroupSize(Integer maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocationViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public LocationViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public LocationViewModel withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryBusiness")
    public Boolean primaryBusiness;
    public LocationViewModel withPrimaryBusiness(Boolean primaryBusiness) {
        this.primaryBusiness = primaryBusiness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryCalendarId")
    public String primaryCalendarId;
    public LocationViewModel withPrimaryCalendarId(String primaryCalendarId) {
        this.primaryCalendarId = primaryCalendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionId")
    public String regionId;
    public LocationViewModel withRegionId(String regionId) {
        this.regionId = regionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneIana")
    public String timezoneIana;
    public LocationViewModel withTimezoneIana(String timezoneIana) {
        this.timezoneIana = timezoneIana;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneId")
    public String timezoneId;
    public LocationViewModel withTimezoneId(String timezoneId) {
        this.timezoneId = timezoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneOffset")
    public Integer timezoneOffset;
    public LocationViewModel withTimezoneOffset(Integer timezoneOffset) {
        this.timezoneOffset = timezoneOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public LocationViewModel withWebsite(String website) {
        this.website = website;
        return this;
    }
}