package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntegralAdScience
 * Details of Integral Ad Science settings.
**/
public class IntegralAdScience {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customSegmentId")
    public String[] customSegmentId;
    public IntegralAdScience withCustomSegmentId(String[] customSegmentId) {
        this.customSegmentId = customSegmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayViewability")
    public IntegralAdScienceDisplayViewabilityEnum displayViewability;
    public IntegralAdScience withDisplayViewability(IntegralAdScienceDisplayViewabilityEnum displayViewability) {
        this.displayViewability = displayViewability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeUnrateable")
    public Boolean excludeUnrateable;
    public IntegralAdScience withExcludeUnrateable(Boolean excludeUnrateable) {
        this.excludeUnrateable = excludeUnrateable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedAdFraudRisk")
    public IntegralAdScienceExcludedAdFraudRiskEnum excludedAdFraudRisk;
    public IntegralAdScience withExcludedAdFraudRisk(IntegralAdScienceExcludedAdFraudRiskEnum excludedAdFraudRisk) {
        this.excludedAdFraudRisk = excludedAdFraudRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedAdultRisk")
    public IntegralAdScienceExcludedAdultRiskEnum excludedAdultRisk;
    public IntegralAdScience withExcludedAdultRisk(IntegralAdScienceExcludedAdultRiskEnum excludedAdultRisk) {
        this.excludedAdultRisk = excludedAdultRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedAlcoholRisk")
    public IntegralAdScienceExcludedAlcoholRiskEnum excludedAlcoholRisk;
    public IntegralAdScience withExcludedAlcoholRisk(IntegralAdScienceExcludedAlcoholRiskEnum excludedAlcoholRisk) {
        this.excludedAlcoholRisk = excludedAlcoholRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedDrugsRisk")
    public IntegralAdScienceExcludedDrugsRiskEnum excludedDrugsRisk;
    public IntegralAdScience withExcludedDrugsRisk(IntegralAdScienceExcludedDrugsRiskEnum excludedDrugsRisk) {
        this.excludedDrugsRisk = excludedDrugsRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedGamblingRisk")
    public IntegralAdScienceExcludedGamblingRiskEnum excludedGamblingRisk;
    public IntegralAdScience withExcludedGamblingRisk(IntegralAdScienceExcludedGamblingRiskEnum excludedGamblingRisk) {
        this.excludedGamblingRisk = excludedGamblingRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedHateSpeechRisk")
    public IntegralAdScienceExcludedHateSpeechRiskEnum excludedHateSpeechRisk;
    public IntegralAdScience withExcludedHateSpeechRisk(IntegralAdScienceExcludedHateSpeechRiskEnum excludedHateSpeechRisk) {
        this.excludedHateSpeechRisk = excludedHateSpeechRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedIllegalDownloadsRisk")
    public IntegralAdScienceExcludedIllegalDownloadsRiskEnum excludedIllegalDownloadsRisk;
    public IntegralAdScience withExcludedIllegalDownloadsRisk(IntegralAdScienceExcludedIllegalDownloadsRiskEnum excludedIllegalDownloadsRisk) {
        this.excludedIllegalDownloadsRisk = excludedIllegalDownloadsRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedOffensiveLanguageRisk")
    public IntegralAdScienceExcludedOffensiveLanguageRiskEnum excludedOffensiveLanguageRisk;
    public IntegralAdScience withExcludedOffensiveLanguageRisk(IntegralAdScienceExcludedOffensiveLanguageRiskEnum excludedOffensiveLanguageRisk) {
        this.excludedOffensiveLanguageRisk = excludedOffensiveLanguageRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedViolenceRisk")
    public IntegralAdScienceExcludedViolenceRiskEnum excludedViolenceRisk;
    public IntegralAdScience withExcludedViolenceRisk(IntegralAdScienceExcludedViolenceRiskEnum excludedViolenceRisk) {
        this.excludedViolenceRisk = excludedViolenceRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traqScoreOption")
    public IntegralAdScienceTraqScoreOptionEnum traqScoreOption;
    public IntegralAdScience withTraqScoreOption(IntegralAdScienceTraqScoreOptionEnum traqScoreOption) {
        this.traqScoreOption = traqScoreOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoViewability")
    public IntegralAdScienceVideoViewabilityEnum videoViewability;
    public IntegralAdScience withVideoViewability(IntegralAdScienceVideoViewabilityEnum videoViewability) {
        this.videoViewability = videoViewability;
        return this;
    }
}