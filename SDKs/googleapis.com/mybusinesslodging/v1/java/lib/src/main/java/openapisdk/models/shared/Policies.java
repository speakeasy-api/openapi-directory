package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Policies
 * Property rules that impact guests.
**/
public class Policies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allInclusiveAvailable")
    public Boolean allInclusiveAvailable;
    public Policies withAllInclusiveAvailable(Boolean allInclusiveAvailable) {
        this.allInclusiveAvailable = allInclusiveAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allInclusiveAvailableException")
    public PoliciesAllInclusiveAvailableExceptionEnum allInclusiveAvailableException;
    public Policies withAllInclusiveAvailableException(PoliciesAllInclusiveAvailableExceptionEnum allInclusiveAvailableException) {
        this.allInclusiveAvailableException = allInclusiveAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allInclusiveOnly")
    public Boolean allInclusiveOnly;
    public Policies withAllInclusiveOnly(Boolean allInclusiveOnly) {
        this.allInclusiveOnly = allInclusiveOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allInclusiveOnlyException")
    public PoliciesAllInclusiveOnlyExceptionEnum allInclusiveOnlyException;
    public Policies withAllInclusiveOnlyException(PoliciesAllInclusiveOnlyExceptionEnum allInclusiveOnlyException) {
        this.allInclusiveOnlyException = allInclusiveOnlyException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkinTime")
    public TimeOfDay checkinTime;
    public Policies withCheckinTime(TimeOfDay checkinTime) {
        this.checkinTime = checkinTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkinTimeException")
    public PoliciesCheckinTimeExceptionEnum checkinTimeException;
    public Policies withCheckinTimeException(PoliciesCheckinTimeExceptionEnum checkinTimeException) {
        this.checkinTimeException = checkinTimeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkoutTime")
    public TimeOfDay checkoutTime;
    public Policies withCheckoutTime(TimeOfDay checkoutTime) {
        this.checkoutTime = checkoutTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkoutTimeException")
    public PoliciesCheckoutTimeExceptionEnum checkoutTimeException;
    public Policies withCheckoutTimeException(PoliciesCheckoutTimeExceptionEnum checkoutTimeException) {
        this.checkoutTimeException = checkoutTimeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsStayFree")
    public Boolean kidsStayFree;
    public Policies withKidsStayFree(Boolean kidsStayFree) {
        this.kidsStayFree = kidsStayFree;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kidsStayFreeException")
    public PoliciesKidsStayFreeExceptionEnum kidsStayFreeException;
    public Policies withKidsStayFreeException(PoliciesKidsStayFreeExceptionEnum kidsStayFreeException) {
        this.kidsStayFreeException = kidsStayFreeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxChildAge")
    public Integer maxChildAge;
    public Policies withMaxChildAge(Integer maxChildAge) {
        this.maxChildAge = maxChildAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxChildAgeException")
    public PoliciesMaxChildAgeExceptionEnum maxChildAgeException;
    public Policies withMaxChildAgeException(PoliciesMaxChildAgeExceptionEnum maxChildAgeException) {
        this.maxChildAgeException = maxChildAgeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxKidsStayFreeCount")
    public Integer maxKidsStayFreeCount;
    public Policies withMaxKidsStayFreeCount(Integer maxKidsStayFreeCount) {
        this.maxKidsStayFreeCount = maxKidsStayFreeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxKidsStayFreeCountException")
    public PoliciesMaxKidsStayFreeCountExceptionEnum maxKidsStayFreeCountException;
    public Policies withMaxKidsStayFreeCountException(PoliciesMaxKidsStayFreeCountExceptionEnum maxKidsStayFreeCountException) {
        this.maxKidsStayFreeCountException = maxKidsStayFreeCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentOptions")
    public PaymentOptions paymentOptions;
    public Policies withPaymentOptions(PaymentOptions paymentOptions) {
        this.paymentOptions = paymentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smokeFreeProperty")
    public Boolean smokeFreeProperty;
    public Policies withSmokeFreeProperty(Boolean smokeFreeProperty) {
        this.smokeFreeProperty = smokeFreeProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smokeFreePropertyException")
    public PoliciesSmokeFreePropertyExceptionEnum smokeFreePropertyException;
    public Policies withSmokeFreePropertyException(PoliciesSmokeFreePropertyExceptionEnum smokeFreePropertyException) {
        this.smokeFreePropertyException = smokeFreePropertyException;
        return this;
    }
}