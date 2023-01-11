package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingTemplate
 * Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
**/
public class TargetingTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public TargetingTemplate withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public TargetingTemplate withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public TargetingTemplate withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayPartTargeting")
    public DayPartTargeting dayPartTargeting;
    public TargetingTemplate withDayPartTargeting(DayPartTargeting dayPartTargeting) {
        this.dayPartTargeting = dayPartTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoTargeting")
    public GeoTargeting geoTargeting;
    public TargetingTemplate withGeoTargeting(GeoTargeting geoTargeting) {
        this.geoTargeting = geoTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TargetingTemplate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValueTargetingExpression")
    public KeyValueTargetingExpression keyValueTargetingExpression;
    public TargetingTemplate withKeyValueTargetingExpression(KeyValueTargetingExpression keyValueTargetingExpression) {
        this.keyValueTargetingExpression = keyValueTargetingExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TargetingTemplate withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageTargeting")
    public LanguageTargeting languageTargeting;
    public TargetingTemplate withLanguageTargeting(LanguageTargeting languageTargeting) {
        this.languageTargeting = languageTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listTargetingExpression")
    public ListTargetingExpression listTargetingExpression;
    public TargetingTemplate withListTargetingExpression(ListTargetingExpression listTargetingExpression) {
        this.listTargetingExpression = listTargetingExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TargetingTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public TargetingTemplate withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technologyTargeting")
    public TechnologyTargeting technologyTargeting;
    public TargetingTemplate withTechnologyTargeting(TechnologyTargeting technologyTargeting) {
        this.technologyTargeting = technologyTargeting;
        return this;
    }
}