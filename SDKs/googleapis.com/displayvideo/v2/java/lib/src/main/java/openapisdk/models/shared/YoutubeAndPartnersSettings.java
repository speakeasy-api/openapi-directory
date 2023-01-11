package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YoutubeAndPartnersSettings
 * Settings for YouTube and Partners line items.
**/
public class YoutubeAndPartnersSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biddingStrategy")
    public YoutubeAndPartnersBiddingStrategy biddingStrategy;
    public YoutubeAndPartnersSettings withBiddingStrategy(YoutubeAndPartnersBiddingStrategy biddingStrategy) {
        this.biddingStrategy = biddingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategory")
    public YoutubeAndPartnersSettingsContentCategoryEnum contentCategory;
    public YoutubeAndPartnersSettings withContentCategory(YoutubeAndPartnersSettingsContentCategoryEnum contentCategory) {
        this.contentCategory = contentCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceSettings")
    public YoutubeAndPartnersInventorySourceConfig inventorySourceSettings;
    public YoutubeAndPartnersSettings withInventorySourceSettings(YoutubeAndPartnersInventorySourceConfig inventorySourceSettings) {
        this.inventorySourceSettings = inventorySourceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyMeasurementSettings")
    public YoutubeAndPartnersThirdPartyMeasurementSettings thirdPartyMeasurementSettings;
    public YoutubeAndPartnersSettings withThirdPartyMeasurementSettings(YoutubeAndPartnersThirdPartyMeasurementSettings thirdPartyMeasurementSettings) {
        this.thirdPartyMeasurementSettings = thirdPartyMeasurementSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewFrequencyCap")
    public FrequencyCap viewFrequencyCap;
    public YoutubeAndPartnersSettings withViewFrequencyCap(FrequencyCap viewFrequencyCap) {
        this.viewFrequencyCap = viewFrequencyCap;
        return this;
    }
}