package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterParameters
 * Parameters required to register a new domain.
**/
public class RegisterParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public RegisterParametersAvailabilityEnum availability;
    public RegisterParameters withAvailability(RegisterParametersAvailabilityEnum availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public RegisterParameters withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainNotices")
    public RegisterParametersDomainNoticesEnum[] domainNotices;
    public RegisterParameters withDomainNotices(RegisterParametersDomainNoticesEnum[] domainNotices) {
        this.domainNotices = domainNotices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedPrivacy")
    public RegisterParametersSupportedPrivacyEnum[] supportedPrivacy;
    public RegisterParameters withSupportedPrivacy(RegisterParametersSupportedPrivacyEnum[] supportedPrivacy) {
        this.supportedPrivacy = supportedPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yearlyPrice")
    public Money yearlyPrice;
    public RegisterParameters withYearlyPrice(Money yearlyPrice) {
        this.yearlyPrice = yearlyPrice;
        return this;
    }
}