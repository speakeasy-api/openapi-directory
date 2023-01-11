package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1BookingLead
 * Container for booking lead specific information.
**/
public class GoogleAdsHomeservicesLocalservicesV1BookingLead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingAppointmentTimestamp")
    public String bookingAppointmentTimestamp;
    public GoogleAdsHomeservicesLocalservicesV1BookingLead withBookingAppointmentTimestamp(String bookingAppointmentTimestamp) {
        this.bookingAppointmentTimestamp = bookingAppointmentTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerEmail")
    public String consumerEmail;
    public GoogleAdsHomeservicesLocalservicesV1BookingLead withConsumerEmail(String consumerEmail) {
        this.consumerEmail = consumerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerPhoneNumber")
    public String consumerPhoneNumber;
    public GoogleAdsHomeservicesLocalservicesV1BookingLead withConsumerPhoneNumber(String consumerPhoneNumber) {
        this.consumerPhoneNumber = consumerPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerName")
    public String customerName;
    public GoogleAdsHomeservicesLocalservicesV1BookingLead withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobType")
    public String jobType;
    public GoogleAdsHomeservicesLocalservicesV1BookingLead withJobType(String jobType) {
        this.jobType = jobType;
        return this;
    }
}