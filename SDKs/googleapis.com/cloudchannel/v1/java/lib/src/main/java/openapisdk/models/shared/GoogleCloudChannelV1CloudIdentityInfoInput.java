package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CloudIdentityInfoInput
 * Cloud Identity information for the Cloud Channel Customer.
**/
public class GoogleCloudChannelV1CloudIdentityInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateEmail")
    public String alternateEmail;
    public GoogleCloudChannelV1CloudIdentityInfoInput withAlternateEmail(String alternateEmail) {
        this.alternateEmail = alternateEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerType")
    public GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum customerType;
    public GoogleCloudChannelV1CloudIdentityInfoInput withCustomerType(GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum customerType) {
        this.customerType = customerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eduData")
    public GoogleCloudChannelV1EduData eduData;
    public GoogleCloudChannelV1CloudIdentityInfoInput withEduData(GoogleCloudChannelV1EduData eduData) {
        this.eduData = eduData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudChannelV1CloudIdentityInfoInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public GoogleCloudChannelV1CloudIdentityInfoInput withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}