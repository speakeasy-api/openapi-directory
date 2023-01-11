package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Customer
 * Entity representing a customer of a reseller or distributor.
**/
public class GoogleCloudChannelV1Customer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateEmail")
    public String alternateEmail;
    public GoogleCloudChannelV1Customer withAlternateEmail(String alternateEmail) {
        this.alternateEmail = alternateEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerId")
    public String channelPartnerId;
    public GoogleCloudChannelV1Customer withChannelPartnerId(String channelPartnerId) {
        this.channelPartnerId = channelPartnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityId")
    public String cloudIdentityId;
    public GoogleCloudChannelV1Customer withCloudIdentityId(String cloudIdentityId) {
        this.cloudIdentityId = cloudIdentityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityInfo")
    public GoogleCloudChannelV1CloudIdentityInfo cloudIdentityInfo;
    public GoogleCloudChannelV1Customer withCloudIdentityInfo(GoogleCloudChannelV1CloudIdentityInfo cloudIdentityInfo) {
        this.cloudIdentityInfo = cloudIdentityInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudChannelV1Customer withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public GoogleCloudChannelV1Customer withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudChannelV1Customer withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1Customer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgDisplayName")
    public String orgDisplayName;
    public GoogleCloudChannelV1Customer withOrgDisplayName(String orgDisplayName) {
        this.orgDisplayName = orgDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgPostalAddress")
    public GoogleTypePostalAddress orgPostalAddress;
    public GoogleCloudChannelV1Customer withOrgPostalAddress(GoogleTypePostalAddress orgPostalAddress) {
        this.orgPostalAddress = orgPostalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryContactInfo")
    public GoogleCloudChannelV1ContactInfo primaryContactInfo;
    public GoogleCloudChannelV1Customer withPrimaryContactInfo(GoogleCloudChannelV1ContactInfo primaryContactInfo) {
        this.primaryContactInfo = primaryContactInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudChannelV1Customer withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}