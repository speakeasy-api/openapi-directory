package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CloudIdentityInfo
 * Cloud Identity information for the Cloud Channel Customer.
**/
public class GoogleCloudChannelV1CloudIdentityInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminConsoleUri")
    public String adminConsoleUri;
    public GoogleCloudChannelV1CloudIdentityInfo withAdminConsoleUri(String adminConsoleUri) {
        this.adminConsoleUri = adminConsoleUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateEmail")
    public String alternateEmail;
    public GoogleCloudChannelV1CloudIdentityInfo withAlternateEmail(String alternateEmail) {
        this.alternateEmail = alternateEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerType")
    public GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum customerType;
    public GoogleCloudChannelV1CloudIdentityInfo withCustomerType(GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum customerType) {
        this.customerType = customerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eduData")
    public GoogleCloudChannelV1EduData eduData;
    public GoogleCloudChannelV1CloudIdentityInfo withEduData(GoogleCloudChannelV1EduData eduData) {
        this.eduData = eduData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDomainVerified")
    public Boolean isDomainVerified;
    public GoogleCloudChannelV1CloudIdentityInfo withIsDomainVerified(Boolean isDomainVerified) {
        this.isDomainVerified = isDomainVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudChannelV1CloudIdentityInfo withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public GoogleCloudChannelV1CloudIdentityInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDomain")
    public String primaryDomain;
    public GoogleCloudChannelV1CloudIdentityInfo withPrimaryDomain(String primaryDomain) {
        this.primaryDomain = primaryDomain;
        return this;
    }
}