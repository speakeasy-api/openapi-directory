package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneNumbers
 * A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).
**/
public class PhoneNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalPhones")
    public String[] additionalPhones;
    public PhoneNumbers withAdditionalPhones(String[] additionalPhones) {
        this.additionalPhones = additionalPhones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPhone")
    public String primaryPhone;
    public PhoneNumbers withPrimaryPhone(String primaryPhone) {
        this.primaryPhone = primaryPhone;
        return this;
    }
}