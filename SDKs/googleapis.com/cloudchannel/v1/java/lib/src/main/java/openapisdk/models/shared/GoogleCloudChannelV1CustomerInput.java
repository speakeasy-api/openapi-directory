package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CustomerInput
 * Entity representing a customer of a reseller or distributor.
**/
public class GoogleCloudChannelV1CustomerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateEmail")
    public String alternateEmail;
    public GoogleCloudChannelV1CustomerInput withAlternateEmail(String alternateEmail) {
        this.alternateEmail = alternateEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerId")
    public String channelPartnerId;
    public GoogleCloudChannelV1CustomerInput withChannelPartnerId(String channelPartnerId) {
        this.channelPartnerId = channelPartnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityInfo")
    public GoogleCloudChannelV1CloudIdentityInfoInput cloudIdentityInfo;
    public GoogleCloudChannelV1CustomerInput withCloudIdentityInfo(GoogleCloudChannelV1CloudIdentityInfoInput cloudIdentityInfo) {
        this.cloudIdentityInfo = cloudIdentityInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public GoogleCloudChannelV1CustomerInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudChannelV1CustomerInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgDisplayName")
    public String orgDisplayName;
    public GoogleCloudChannelV1CustomerInput withOrgDisplayName(String orgDisplayName) {
        this.orgDisplayName = orgDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgPostalAddress")
    public GoogleTypePostalAddress orgPostalAddress;
    public GoogleCloudChannelV1CustomerInput withOrgPostalAddress(GoogleTypePostalAddress orgPostalAddress) {
        this.orgPostalAddress = orgPostalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactInfo")
    public GoogleCloudChannelV1ContactInfoInput primaryContactInfo;
    public GoogleCloudChannelV1CustomerInput withPrimaryContactInfo(GoogleCloudChannelV1ContactInfoInput primaryContactInfo) {
        this.primaryContactInfo = primaryContactInfo;
        return this;
    }
}