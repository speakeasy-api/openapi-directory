package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Creative
 * A single Creative.
**/
public class Creative {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalDimensions")
    public Dimensions[] additionalDimensions;
    public Creative withAdditionalDimensions(Dimensions[] additionalDimensions) {
        this.additionalDimensions = additionalDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Creative withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appendedTag")
    public String appendedTag;
    public Creative withAppendedTag(String appendedTag) {
        this.appendedTag = appendedTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public AssetAssociation[] assets;
    public Creative withAssets(AssetAssociation[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmPlacementId")
    public String cmPlacementId;
    public Creative withCmPlacementId(String cmPlacementId) {
        this.cmPlacementId = cmPlacementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmTrackingAd")
    public CmTrackingAd cmTrackingAd;
    public Creative withCmTrackingAd(CmTrackingAd cmTrackingAd) {
        this.cmTrackingAd = cmTrackingAd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionCreativeIds")
    public String[] companionCreativeIds;
    public Creative withCompanionCreativeIds(String[] companionCreativeIds) {
        this.companionCreativeIds = companionCreativeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counterEvents")
    public CounterEvent[] counterEvents;
    public Creative withCounterEvents(CounterEvent[] counterEvents) {
        this.counterEvents = counterEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Creative withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeAttributes")
    public CreativeCreativeAttributesEnum[] creativeAttributes;
    public Creative withCreativeAttributes(CreativeCreativeAttributesEnum[] creativeAttributes) {
        this.creativeAttributes = creativeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public Creative withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeType")
    public CreativeCreativeTypeEnum creativeType;
    public Creative withCreativeType(CreativeCreativeTypeEnum creativeType) {
        this.creativeType = creativeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public Creative withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Creative withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamic")
    public Boolean dynamic;
    public Creative withDynamic(Boolean dynamic) {
        this.dynamic = dynamic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityStatus")
    public CreativeEntityStatusEnum entityStatus;
    public Creative withEntityStatus(CreativeEntityStatusEnum entityStatus) {
        this.entityStatus = entityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitEvents")
    public ExitEvent[] exitEvents;
    public Creative withExitEvents(ExitEvent[] exitEvents) {
        this.exitEvents = exitEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandOnHover")
    public Boolean expandOnHover;
    public Creative withExpandOnHover(Boolean expandOnHover) {
        this.expandOnHover = expandOnHover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandingDirection")
    public CreativeExpandingDirectionEnum expandingDirection;
    public Creative withExpandingDirection(CreativeExpandingDirectionEnum expandingDirection) {
        this.expandingDirection = expandingDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostingSource")
    public CreativeHostingSourceEnum hostingSource;
    public Creative withHostingSource(CreativeHostingSourceEnum hostingSource) {
        this.hostingSource = hostingSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html5Video")
    public Boolean html5Video;
    public Creative withHtml5Video(Boolean html5Video) {
        this.html5Video = html5Video;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iasCampaignMonitoring")
    public Boolean iasCampaignMonitoring;
    public Creative withIasCampaignMonitoring(Boolean iasCampaignMonitoring) {
        this.iasCampaignMonitoring = iasCampaignMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationCode")
    public String integrationCode;
    public Creative withIntegrationCode(String integrationCode) {
        this.integrationCode = integrationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsTrackerUrl")
    public String jsTrackerUrl;
    public Creative withJsTrackerUrl(String jsTrackerUrl) {
        this.jsTrackerUrl = jsTrackerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemIds")
    public String[] lineItemIds;
    public Creative withLineItemIds(String[] lineItemIds) {
        this.lineItemIds = lineItemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaDuration")
    public String mediaDuration;
    public Creative withMediaDuration(String mediaDuration) {
        this.mediaDuration = mediaDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mp3Audio")
    public Boolean mp3Audio;
    public Creative withMp3Audio(Boolean mp3Audio) {
        this.mp3Audio = mp3Audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Creative withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public Creative withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obaIcon")
    public ObaIcon obaIcon;
    public Creative withObaIcon(ObaIcon obaIcon) {
        this.obaIcon = obaIcon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oggAudio")
    public Boolean oggAudio;
    public Creative withOggAudio(Boolean oggAudio) {
        this.oggAudio = oggAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressOffset")
    public AudioVideoOffset progressOffset;
    public Creative withProgressOffset(AudioVideoOffset progressOffset) {
        this.progressOffset = progressOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireHtml5")
    public Boolean requireHtml5;
    public Creative withRequireHtml5(Boolean requireHtml5) {
        this.requireHtml5 = requireHtml5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireMraid")
    public Boolean requireMraid;
    public Creative withRequireMraid(Boolean requireMraid) {
        this.requireMraid = requireMraid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requirePingForAttribution")
    public Boolean requirePingForAttribution;
    public Creative withRequirePingForAttribution(Boolean requirePingForAttribution) {
        this.requirePingForAttribution = requirePingForAttribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewStatus")
    public ReviewStatusInfo reviewStatus;
    public Creative withReviewStatus(ReviewStatusInfo reviewStatus) {
        this.reviewStatus = reviewStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOffset")
    public AudioVideoOffset skipOffset;
    public Creative withSkipOffset(AudioVideoOffset skipOffset) {
        this.skipOffset = skipOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippable")
    public Boolean skippable;
    public Creative withSkippable(Boolean skippable) {
        this.skippable = skippable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyTag")
    public String thirdPartyTag;
    public Creative withThirdPartyTag(String thirdPartyTag) {
        this.thirdPartyTag = thirdPartyTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyUrls")
    public ThirdPartyUrl[] thirdPartyUrls;
    public Creative withThirdPartyUrls(ThirdPartyUrl[] thirdPartyUrls) {
        this.thirdPartyUrls = thirdPartyUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timerEvents")
    public TimerEvent[] timerEvents;
    public Creative withTimerEvents(TimerEvent[] timerEvents) {
        this.timerEvents = timerEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackerUrls")
    public String[] trackerUrls;
    public Creative withTrackerUrls(String[] trackerUrls) {
        this.trackerUrls = trackerUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcodes")
    public Transcode[] transcodes;
    public Creative withTranscodes(Transcode[] transcodes) {
        this.transcodes = transcodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("universalAdId")
    public UniversalAdId universalAdId;
    public Creative withUniversalAdId(UniversalAdId universalAdId) {
        this.universalAdId = universalAdId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Creative withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vastTagUrl")
    public String vastTagUrl;
    public Creative withVastTagUrl(String vastTagUrl) {
        this.vastTagUrl = vastTagUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpaid")
    public Boolean vpaid;
    public Creative withVpaid(Boolean vpaid) {
        this.vpaid = vpaid;
        return this;
    }
}