package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FacilityAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_status")
    public FacilityAttributesActiveStatusEnum activeStatus;
    public FacilityAttributes withActiveStatus(FacilityAttributesActiveStatusEnum activeStatus) {
        this.activeStatus = activeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Addresses address;
    public FacilityAttributes withAddress(Addresses address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public String classification;
    public FacilityAttributes withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailed_services")
    public DetailedService[] detailedServices;
    public FacilityAttributes withDetailedServices(DetailedService[] detailedServices) {
        this.detailedServices = detailedServices;
        return this;
    }
    @JsonProperty("facility_type")
    public FacilityAttributesFacilityTypeEnum facilityType;
    public FacilityAttributes withFacilityType(FacilityAttributesFacilityTypeEnum facilityType) {
        this.facilityType = facilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Hours hours;
    public FacilityAttributes withHours(Hours hours) {
        this.hours = hours;
        return this;
    }
    @JsonProperty("lat")
    public Float lat;
    public FacilityAttributes withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonProperty("long")
    public Float long_;
    public FacilityAttributes withLong(Float long_) {
        this.long_ = long_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile")
    public Boolean mobile;
    public FacilityAttributes withMobile(Boolean mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public FacilityAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operating_status")
    public OperatingStatus operatingStatus;
    public FacilityAttributes withOperatingStatus(OperatingStatus operatingStatus) {
        this.operatingStatus = operatingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operational_hours_special_instructions")
    public String operationalHoursSpecialInstructions;
    public FacilityAttributes withOperationalHoursSpecialInstructions(String operationalHoursSpecialInstructions) {
        this.operationalHoursSpecialInstructions = operationalHoursSpecialInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public Phone phone;
    public FacilityAttributes withPhone(Phone phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfaction")
    public Satisfaction satisfaction;
    public FacilityAttributes withSatisfaction(Satisfaction satisfaction) {
        this.satisfaction = satisfaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Services services;
    public FacilityAttributes withServices(Services services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_zone")
    public String timeZone;
    public FacilityAttributes withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visn")
    public String visn;
    public FacilityAttributes withVisn(String visn) {
        this.visn = visn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_times")
    public WaitTimes waitTimes;
    public FacilityAttributes withWaitTimes(WaitTimes waitTimes) {
        this.waitTimes = waitTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public FacilityAttributes withWebsite(String website) {
        this.website = website;
        return this;
    }
}