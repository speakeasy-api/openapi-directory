package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Properties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_status")
    public PropertiesActiveStatusEnum activeStatus;
    public Properties withActiveStatus(PropertiesActiveStatusEnum activeStatus) {
        this.activeStatus = activeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Addresses address;
    public Properties withAddress(Addresses address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public String classification;
    public Properties withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailed_services")
    public DetailedService[] detailedServices;
    public Properties withDetailedServices(DetailedService[] detailedServices) {
        this.detailedServices = detailedServices;
        return this;
    }
    @JsonProperty("facility_type")
    public PropertiesFacilityTypeEnum facilityType;
    public Properties withFacilityType(PropertiesFacilityTypeEnum facilityType) {
        this.facilityType = facilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Hours hours;
    public Properties withHours(Hours hours) {
        this.hours = hours;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Properties withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile")
    public Boolean mobile;
    public Properties withMobile(Boolean mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Properties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operating_status")
    public OperatingStatus operatingStatus;
    public Properties withOperatingStatus(OperatingStatus operatingStatus) {
        this.operatingStatus = operatingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operational_hours_special_instructions")
    public String operationalHoursSpecialInstructions;
    public Properties withOperationalHoursSpecialInstructions(String operationalHoursSpecialInstructions) {
        this.operationalHoursSpecialInstructions = operationalHoursSpecialInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public Phone phone;
    public Properties withPhone(Phone phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("satisfaction")
    public Satisfaction satisfaction;
    public Properties withSatisfaction(Satisfaction satisfaction) {
        this.satisfaction = satisfaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Services services;
    public Properties withServices(Services services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_zone")
    public String timeZone;
    public Properties withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visn")
    public String visn;
    public Properties withVisn(String visn) {
        this.visn = visn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wait_times")
    public WaitTimes waitTimes;
    public Properties withWaitTimes(WaitTimes waitTimes) {
        this.waitTimes = waitTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Properties withWebsite(String website) {
        this.website = website;
        return this;
    }
}