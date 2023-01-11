package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeInput
 * A single Creative.
**/
public class CreativeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalDimensions")
    public Dimensions[] additionalDimensions;
    public CreativeInput withAdditionalDimensions(Dimensions[] additionalDimensions) {
        this.additionalDimensions = additionalDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appendedTag")
    public String appendedTag;
    public CreativeInput withAppendedTag(String appendedTag) {
        this.appendedTag = appendedTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public AssetAssociation[] assets;
    public CreativeInput withAssets(AssetAssociation[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmTrackingAd")
    public CmTrackingAd cmTrackingAd;
    public CreativeInput withCmTrackingAd(CmTrackingAd cmTrackingAd) {
        this.cmTrackingAd = cmTrackingAd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionCreativeIds")
    public String[] companionCreativeIds;
    public CreativeInput withCompanionCreativeIds(String[] companionCreativeIds) {
        this.companionCreativeIds = companionCreativeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counterEvents")
    public CounterEvent[] counterEvents;
    public CreativeInput withCounterEvents(CounterEvent[] counterEvents) {
        this.counterEvents = counterEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeType")
    public CreativeCreativeTypeEnum creativeType;
    public CreativeInput withCreativeType(CreativeCreativeTypeEnum creativeType) {
        this.creativeType = creativeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public CreativeInput withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CreativeInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public CreativeEntityStatusEnum entityStatus;
    public CreativeInput withEntityStatus(CreativeEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitEvents")
    public ExitEvent[] exitEvents;
    public CreativeInput withExitEvents(ExitEvent[] exitEvents) {
        this.exitEvents = exitEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandOnHover")
    public Boolean expandOnHover;
    public CreativeInput withExpandOnHover(Boolean expandOnHover) {
        this.expandOnHover = expandOnHover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandingDirection")
    public CreativeExpandingDirectionEnum expandingDirection;
    public CreativeInput withExpandingDirection(CreativeExpandingDirectionEnum expandingDirection) {
        this.expandingDirection = expandingDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostingSource")
    public CreativeHostingSourceEnum hostingSource;
    public CreativeInput withHostingSource(CreativeHostingSourceEnum hostingSource) {
        this.hostingSource = hostingSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iasCampaignMonitoring")
    public Boolean iasCampaignMonitoring;
    public CreativeInput withIasCampaignMonitoring(Boolean iasCampaignMonitoring) {
        this.iasCampaignMonitoring = iasCampaignMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationCode")
    public String integrationCode;
    public CreativeInput withIntegrationCode(String integrationCode) {
        this.integrationCode = integrationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsTrackerUrl")
    public String jsTrackerUrl;
    public CreativeInput withJsTrackerUrl(String jsTrackerUrl) {
        this.jsTrackerUrl = jsTrackerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CreativeInput withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obaIcon")
    public ObaIcon obaIcon;
    public CreativeInput withObaIcon(ObaIcon obaIcon) {
        this.obaIcon = obaIcon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressOffset")
    public AudioVideoOffset progressOffset;
    public CreativeInput withProgressOffset(AudioVideoOffset progressOffset) {
        this.progressOffset = progressOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireHtml5")
    public Boolean requireHtml5;
    public CreativeInput withRequireHtml5(Boolean requireHtml5) {
        this.requireHtml5 = requireHtml5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireMraid")
    public Boolean requireMraid;
    public CreativeInput withRequireMraid(Boolean requireMraid) {
        this.requireMraid = requireMraid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requirePingForAttribution")
    public Boolean requirePingForAttribution;
    public CreativeInput withRequirePingForAttribution(Boolean requirePingForAttribution) {
        this.requirePingForAttribution = requirePingForAttribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewStatus")
    public ReviewStatusInfo reviewStatus;
    public CreativeInput withReviewStatus(ReviewStatusInfo reviewStatus) {
        this.reviewStatus = reviewStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOffset")
    public AudioVideoOffset skipOffset;
    public CreativeInput withSkipOffset(AudioVideoOffset skipOffset) {
        this.skipOffset = skipOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippable")
    public Boolean skippable;
    public CreativeInput withSkippable(Boolean skippable) {
        this.skippable = skippable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyTag")
    public String thirdPartyTag;
    public CreativeInput withThirdPartyTag(String thirdPartyTag) {
        this.thirdPartyTag = thirdPartyTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyUrls")
    public ThirdPartyUrl[] thirdPartyUrls;
    public CreativeInput withThirdPartyUrls(ThirdPartyUrl[] thirdPartyUrls) {
        this.thirdPartyUrls = thirdPartyUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timerEvents")
    public TimerEvent[] timerEvents;
    public CreativeInput withTimerEvents(TimerEvent[] timerEvents) {
        this.timerEvents = timerEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackerUrls")
    public String[] trackerUrls;
    public CreativeInput withTrackerUrls(String[] trackerUrls) {
        this.trackerUrls = trackerUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("universalAdId")
    public UniversalAdId universalAdId;
    public CreativeInput withUniversalAdId(UniversalAdId universalAdId) {
        this.universalAdId = universalAdId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vastTagUrl")
    public String vastTagUrl;
    public CreativeInput withVastTagUrl(String vastTagUrl) {
        this.vastTagUrl = vastTagUrl;
        return this;
    }
}