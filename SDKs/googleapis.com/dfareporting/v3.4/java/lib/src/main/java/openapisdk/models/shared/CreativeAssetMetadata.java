package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeAssetMetadata
 * CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
**/
public class CreativeAssetMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetIdentifier")
    public CreativeAssetId assetIdentifier;
    public CreativeAssetMetadata withAssetIdentifier(CreativeAssetId assetIdentifier) {
        this.assetIdentifier = assetIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickTags")
    public ClickTag[] clickTags;
    public CreativeAssetMetadata withClickTags(ClickTag[] clickTags) {
        this.clickTags = clickTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counterCustomEvents")
    public CreativeCustomEvent[] counterCustomEvents;
    public CreativeAssetMetadata withCounterCustomEvents(CreativeCustomEvent[] counterCustomEvents) {
        this.counterCustomEvents = counterCustomEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedFeatures")
    public CreativeAssetMetadataDetectedFeaturesEnum[] detectedFeatures;
    public CreativeAssetMetadata withDetectedFeatures(CreativeAssetMetadataDetectedFeaturesEnum[] detectedFeatures) {
        this.detectedFeatures = detectedFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCustomEvents")
    public CreativeCustomEvent[] exitCustomEvents;
    public CreativeAssetMetadata withExitCustomEvents(CreativeCustomEvent[] exitCustomEvents) {
        this.exitCustomEvents = exitCustomEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreativeAssetMetadata withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public CreativeAssetMetadata withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CreativeAssetMetadata withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("richMedia")
    public Boolean richMedia;
    public CreativeAssetMetadata withRichMedia(Boolean richMedia) {
        this.richMedia = richMedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timerCustomEvents")
    public CreativeCustomEvent[] timerCustomEvents;
    public CreativeAssetMetadata withTimerCustomEvents(CreativeCustomEvent[] timerCustomEvents) {
        this.timerCustomEvents = timerCustomEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnedValidationRules")
    public CreativeAssetMetadataWarnedValidationRulesEnum[] warnedValidationRules;
    public CreativeAssetMetadata withWarnedValidationRules(CreativeAssetMetadataWarnedValidationRulesEnum[] warnedValidationRules) {
        this.warnedValidationRules = warnedValidationRules;
        return this;
    }
}