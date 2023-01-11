package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentChannelRule
 * Rules that will get applied when creating or updating a payment channel for the given country
**/
public class PaymentChannelRule {
    @JsonProperty("displayName")
    public String displayName;
    public PaymentChannelRule withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayOrder")
    public Long displayOrder;
    public PaymentChannelRule withDisplayOrder(Long displayOrder) {
        this.displayOrder = displayOrder;
        return this;
    }
    @JsonProperty("element")
    public String element;
    public PaymentChannelRule withElement(String element) {
        this.element = element;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLength")
    public Long maxLength;
    public PaymentChannelRule withMaxLength(Long maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLength")
    public Long minLength;
    public PaymentChannelRule withMinLength(Long minLength) {
        this.minLength = minLength;
        return this;
    }
    @JsonProperty("required")
    public Boolean required;
    public PaymentChannelRule withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonProperty("validation")
    public String validation;
    public PaymentChannelRule withValidation(String validation) {
        this.validation = validation;
        return this;
    }
}