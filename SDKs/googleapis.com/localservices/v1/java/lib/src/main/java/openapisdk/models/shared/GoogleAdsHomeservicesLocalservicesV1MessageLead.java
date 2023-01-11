package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1MessageLead
 * Container for message lead specific information.
**/
public class GoogleAdsHomeservicesLocalservicesV1MessageLead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerPhoneNumber")
    public String consumerPhoneNumber;
    public GoogleAdsHomeservicesLocalservicesV1MessageLead withConsumerPhoneNumber(String consumerPhoneNumber) {
        this.consumerPhoneNumber = consumerPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerName")
    public String customerName;
    public GoogleAdsHomeservicesLocalservicesV1MessageLead withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobType")
    public String jobType;
    public GoogleAdsHomeservicesLocalservicesV1MessageLead withJobType(String jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public GoogleAdsHomeservicesLocalservicesV1MessageLead withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
}