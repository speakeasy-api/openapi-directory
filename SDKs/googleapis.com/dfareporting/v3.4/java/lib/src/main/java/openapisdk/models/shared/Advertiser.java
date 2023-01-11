package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Advertiser
 * Contains properties of a Campaign Manager advertiser.
**/
public class Advertiser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Advertiser withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserGroupId")
    public String advertiserGroupId;
    public Advertiser withAdvertiserGroupId(String advertiserGroupId) {
        this.advertiserGroupId = advertiserGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrlSuffix")
    public String clickThroughUrlSuffix;
    public Advertiser withClickThroughUrlSuffix(String clickThroughUrlSuffix) {
        this.clickThroughUrlSuffix = clickThroughUrlSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultClickThroughEventTagId")
    public String defaultClickThroughEventTagId;
    public Advertiser withDefaultClickThroughEventTagId(String defaultClickThroughEventTagId) {
        this.defaultClickThroughEventTagId = defaultClickThroughEventTagId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultEmail")
    public String defaultEmail;
    public Advertiser withDefaultEmail(String defaultEmail) {
        this.defaultEmail = defaultEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationId")
    public String floodlightConfigurationId;
    public Advertiser withFloodlightConfigurationId(String floodlightConfigurationId) {
        this.floodlightConfigurationId = floodlightConfigurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationIdDimensionValue")
    public DimensionValue floodlightConfigurationIdDimensionValue;
    public Advertiser withFloodlightConfigurationIdDimensionValue(DimensionValue floodlightConfigurationIdDimensionValue) {
        this.floodlightConfigurationIdDimensionValue = floodlightConfigurationIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Advertiser withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public Advertiser withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Advertiser withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Advertiser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalFloodlightConfigurationId")
    public String originalFloodlightConfigurationId;
    public Advertiser withOriginalFloodlightConfigurationId(String originalFloodlightConfigurationId) {
        this.originalFloodlightConfigurationId = originalFloodlightConfigurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AdvertiserStatusEnum status;
    public Advertiser withStatus(AdvertiserStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Advertiser withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public Advertiser withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
}