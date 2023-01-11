package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightActivityGroup
 * Contains properties of a Floodlight activity group.
**/
public class FloodlightActivityGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public FloodlightActivityGroup withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public FloodlightActivityGroup withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public FloodlightActivityGroup withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationId")
    public String floodlightConfigurationId;
    public FloodlightActivityGroup withFloodlightConfigurationId(String floodlightConfigurationId) {
        this.floodlightConfigurationId = floodlightConfigurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightConfigurationIdDimensionValue")
    public DimensionValue floodlightConfigurationIdDimensionValue;
    public FloodlightActivityGroup withFloodlightConfigurationIdDimensionValue(DimensionValue floodlightConfigurationIdDimensionValue) {
        this.floodlightConfigurationIdDimensionValue = floodlightConfigurationIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FloodlightActivityGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public FloodlightActivityGroup withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightActivityGroup withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FloodlightActivityGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public FloodlightActivityGroup withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagString")
    public String tagString;
    public FloodlightActivityGroup withTagString(String tagString) {
        this.tagString = tagString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FloodlightActivityGroupTypeEnum type;
    public FloodlightActivityGroup withType(FloodlightActivityGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}