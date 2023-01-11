package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetailedService
 * Detailed information of a facility service.
**/
public class DetailedService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment_leadin")
    public String appointmentLeadin;
    public DetailedService withAppointmentLeadin(String appointmentLeadin) {
        this.appointmentLeadin = appointmentLeadin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment_phones")
    public AppointmentPhoneNumber[] appointmentPhones;
    public DetailedService withAppointmentPhones(AppointmentPhoneNumber[] appointmentPhones) {
        this.appointmentPhones = appointmentPhones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_facility")
    public String descriptionFacility;
    public DetailedService withDescriptionFacility(String descriptionFacility) {
        this.descriptionFacility = descriptionFacility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DetailedService withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("online_scheduling_available")
    public String onlineSchedulingAvailable;
    public DetailedService withOnlineSchedulingAvailable(String onlineSchedulingAvailable) {
        this.onlineSchedulingAvailable = onlineSchedulingAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public DetailedService withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referral_required")
    public String referralRequired;
    public DetailedService withReferralRequired(String referralRequired) {
        this.referralRequired = referralRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_locations")
    public DetailedServiceLocation[] serviceLocations;
    public DetailedService withServiceLocations(DetailedServiceLocation[] serviceLocations) {
        this.serviceLocations = serviceLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("walk_ins_accepted")
    public String walkInsAccepted;
    public DetailedService withWalkInsAccepted(String walkInsAccepted) {
        this.walkInsAccepted = walkInsAccepted;
        return this;
    }
}