package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightActivity
 * Contains properties of a Floodlight activity.
**/
public class FloodlightActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public FloodlightActivity withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public FloodlightActivity withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public FloodlightActivity withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributionEnabled")
    public Boolean attributionEnabled;
    public FloodlightActivity withAttributionEnabled(Boolean attributionEnabled) {
        this.attributionEnabled = attributionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheBustingType")
    public FloodlightActivityCacheBustingTypeEnum cacheBustingType;
    public FloodlightActivity withCacheBustingType(FloodlightActivityCacheBustingTypeEnum cacheBustingType) {
        this.cacheBustingType = cacheBustingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countingMethod")
    public FloodlightActivityCountingMethodEnum countingMethod;
    public FloodlightActivity withCountingMethod(FloodlightActivityCountingMethodEnum countingMethod) {
        this.countingMethod = countingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultTags")
    public FloodlightActivityDynamicTag[] defaultTags;
    public FloodlightActivity withDefaultTags(FloodlightActivityDynamicTag[] defaultTags) {
        this.defaultTags = defaultTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedUrl")
    public String expectedUrl;
    public FloodlightActivity withExpectedUrl(String expectedUrl) {
        this.expectedUrl = expectedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityGroupId")
    public String floodlightActivityGroupId;
    public FloodlightActivity withFloodlightActivityGroupId(String floodlightActivityGroupId) {
        this.floodlightActivityGroupId = floodlightActivityGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityGroupName")
    public String floodlightActivityGroupName;
    public FloodlightActivity withFloodlightActivityGroupName(String floodlightActivityGroupName) {
        this.floodlightActivityGroupName = floodlightActivityGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityGroupTagString")
    public String floodlightActivityGroupTagString;
    public FloodlightActivity withFloodlightActivityGroupTagString(String floodlightActivityGroupTagString) {
        this.floodlightActivityGroupTagString = floodlightActivityGroupTagString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityGroupType")
    public FloodlightActivityFloodlightActivityGroupTypeEnum floodlightActivityGroupType;
    public FloodlightActivity withFloodlightActivityGroupType(FloodlightActivityFloodlightActivityGroupTypeEnum floodlightActivityGroupType) {
        this.floodlightActivityGroupType = floodlightActivityGroupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationId")
    public String floodlightConfigurationId;
    public FloodlightActivity withFloodlightConfigurationId(String floodlightConfigurationId) {
        this.floodlightConfigurationId = floodlightConfigurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationIdDimensionValue")
    public DimensionValue floodlightConfigurationIdDimensionValue;
    public FloodlightActivity withFloodlightConfigurationIdDimensionValue(DimensionValue floodlightConfigurationIdDimensionValue) {
        this.floodlightConfigurationIdDimensionValue = floodlightConfigurationIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightTagType")
    public FloodlightActivityFloodlightTagTypeEnum floodlightTagType;
    public FloodlightActivity withFloodlightTagType(FloodlightActivityFloodlightTagTypeEnum floodlightTagType) {
        this.floodlightTagType = floodlightTagType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FloodlightActivity withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public FloodlightActivity withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightActivity withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FloodlightActivity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public FloodlightActivity withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherTags")
    public FloodlightActivityPublisherDynamicTag[] publisherTags;
    public FloodlightActivity withPublisherTags(FloodlightActivityPublisherDynamicTag[] publisherTags) {
        this.publisherTags = publisherTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secure")
    public Boolean secure;
    public FloodlightActivity withSecure(Boolean secure) {
        this.secure = secure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslCompliant")
    public Boolean sslCompliant;
    public FloodlightActivity withSslCompliant(Boolean sslCompliant) {
        this.sslCompliant = sslCompliant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslRequired")
    public Boolean sslRequired;
    public FloodlightActivity withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FloodlightActivityStatusEnum status;
    public FloodlightActivity withStatus(FloodlightActivityStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public FloodlightActivity withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFormat")
    public FloodlightActivityTagFormatEnum tagFormat;
    public FloodlightActivity withTagFormat(FloodlightActivityTagFormatEnum tagFormat) {
        this.tagFormat = tagFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagString")
    public String tagString;
    public FloodlightActivity withTagString(String tagString) {
        this.tagString = tagString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefinedVariableTypes")
    public FloodlightActivityUserDefinedVariableTypesEnum[] userDefinedVariableTypes;
    public FloodlightActivity withUserDefinedVariableTypes(FloodlightActivityUserDefinedVariableTypesEnum[] userDefinedVariableTypes) {
        this.userDefinedVariableTypes = userDefinedVariableTypes;
        return this;
    }
}