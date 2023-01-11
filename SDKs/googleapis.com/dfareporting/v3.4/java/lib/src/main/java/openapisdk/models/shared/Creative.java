package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Creative
 * Contains properties of a Creative.
**/
public class Creative {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Creative withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public Creative withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adParameters")
    public String adParameters;
    public Creative withAdParameters(String adParameters) {
        this.adParameters = adParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adTagKeys")
    public String[] adTagKeys;
    public Creative withAdTagKeys(String[] adTagKeys) {
        this.adTagKeys = adTagKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalSizes")
    public Size[] additionalSizes;
    public Creative withAdditionalSizes(Size[] additionalSizes) {
        this.additionalSizes = additionalSizes;
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
    @JsonProperty("allowScriptAccess")
    public Boolean allowScriptAccess;
    public Creative withAllowScriptAccess(Boolean allowScriptAccess) {
        this.allowScriptAccess = allowScriptAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public Creative withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artworkType")
    public CreativeArtworkTypeEnum artworkType;
    public Creative withArtworkType(CreativeArtworkTypeEnum artworkType) {
        this.artworkType = artworkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authoringSource")
    public CreativeAuthoringSourceEnum authoringSource;
    public Creative withAuthoringSource(CreativeAuthoringSourceEnum authoringSource) {
        this.authoringSource = authoringSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authoringTool")
    public CreativeAuthoringToolEnum authoringTool;
    public Creative withAuthoringTool(CreativeAuthoringToolEnum authoringTool) {
        this.authoringTool = authoringTool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoAdvanceImages")
    public Boolean autoAdvanceImages;
    public Creative withAutoAdvanceImages(Boolean autoAdvanceImages) {
        this.autoAdvanceImages = autoAdvanceImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public String backgroundColor;
    public Creative withBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupImageClickThroughUrl")
    public CreativeClickThroughUrl backupImageClickThroughUrl;
    public Creative withBackupImageClickThroughUrl(CreativeClickThroughUrl backupImageClickThroughUrl) {
        this.backupImageClickThroughUrl = backupImageClickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupImageFeatures")
    public CreativeBackupImageFeaturesEnum[] backupImageFeatures;
    public Creative withBackupImageFeatures(CreativeBackupImageFeaturesEnum[] backupImageFeatures) {
        this.backupImageFeatures = backupImageFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupImageReportingLabel")
    public String backupImageReportingLabel;
    public Creative withBackupImageReportingLabel(String backupImageReportingLabel) {
        this.backupImageReportingLabel = backupImageReportingLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupImageTargetWindow")
    public TargetWindow backupImageTargetWindow;
    public Creative withBackupImageTargetWindow(TargetWindow backupImageTargetWindow) {
        this.backupImageTargetWindow = backupImageTargetWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickTags")
    public ClickTag[] clickTags;
    public Creative withClickTags(ClickTag[] clickTags) {
        this.clickTags = clickTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercialId")
    public String commercialId;
    public Creative withCommercialId(String commercialId) {
        this.commercialId = commercialId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionCreatives")
    public String[] companionCreatives;
    public Creative withCompanionCreatives(String[] companionCreatives) {
        this.companionCreatives = companionCreatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility")
    public CreativeCompatibilityEnum[] compatibility;
    public Creative withCompatibility(CreativeCompatibilityEnum[] compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convertFlashToHtml5")
    public Boolean convertFlashToHtml5;
    public Creative withConvertFlashToHtml5(Boolean convertFlashToHtml5) {
        this.convertFlashToHtml5 = convertFlashToHtml5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counterCustomEvents")
    public CreativeCustomEvent[] counterCustomEvents;
    public Creative withCounterCustomEvents(CreativeCustomEvent[] counterCustomEvents) {
        this.counterCustomEvents = counterCustomEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeAssetSelection")
    public CreativeAssetSelection creativeAssetSelection;
    public Creative withCreativeAssetSelection(CreativeAssetSelection creativeAssetSelection) {
        this.creativeAssetSelection = creativeAssetSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeAssets")
    public CreativeAsset[] creativeAssets;
    public Creative withCreativeAssets(CreativeAsset[] creativeAssets) {
        this.creativeAssets = creativeAssets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeFieldAssignments")
    public CreativeFieldAssignment[] creativeFieldAssignments;
    public Creative withCreativeFieldAssignments(CreativeFieldAssignment[] creativeFieldAssignments) {
        this.creativeFieldAssignments = creativeFieldAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customKeyValues")
    public String[] customKeyValues;
    public Creative withCustomKeyValues(String[] customKeyValues) {
        this.customKeyValues = customKeyValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicAssetSelection")
    public Boolean dynamicAssetSelection;
    public Creative withDynamicAssetSelection(Boolean dynamicAssetSelection) {
        this.dynamicAssetSelection = dynamicAssetSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCustomEvents")
    public CreativeCustomEvent[] exitCustomEvents;
    public Creative withExitCustomEvents(CreativeCustomEvent[] exitCustomEvents) {
        this.exitCustomEvents = exitCustomEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fsCommand")
    public FsCommand fsCommand;
    public Creative withFsCommand(FsCommand fsCommand) {
        this.fsCommand = fsCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlCode")
    public String htmlCode;
    public Creative withHtmlCode(String htmlCode) {
        this.htmlCode = htmlCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlCodeLocked")
    public Boolean htmlCodeLocked;
    public Creative withHtmlCodeLocked(Boolean htmlCodeLocked) {
        this.htmlCodeLocked = htmlCodeLocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Creative withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public Creative withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Creative withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public Creative withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestTraffickedCreativeId")
    public String latestTraffickedCreativeId;
    public Creative withLatestTraffickedCreativeId(String latestTraffickedCreativeId) {
        this.latestTraffickedCreativeId = latestTraffickedCreativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaDescription")
    public String mediaDescription;
    public Creative withMediaDescription(String mediaDescription) {
        this.mediaDescription = mediaDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaDuration")
    public Float mediaDuration;
    public Creative withMediaDuration(Float mediaDuration) {
        this.mediaDuration = mediaDuration;
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
    @JsonProperty("obaIcon")
    public ObaIcon obaIcon;
    public Creative withObaIcon(ObaIcon obaIcon) {
        this.obaIcon = obaIcon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideCss")
    public String overrideCss;
    public Creative withOverrideCss(String overrideCss) {
        this.overrideCss = overrideCss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressOffset")
    public VideoOffset progressOffset;
    public Creative withProgressOffset(VideoOffset progressOffset) {
        this.progressOffset = progressOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUrl")
    public String redirectUrl;
    public Creative withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderingId")
    public String renderingId;
    public Creative withRenderingId(String renderingId) {
        this.renderingId = renderingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderingIdDimensionValue")
    public DimensionValue renderingIdDimensionValue;
    public Creative withRenderingIdDimensionValue(DimensionValue renderingIdDimensionValue) {
        this.renderingIdDimensionValue = renderingIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredFlashPluginVersion")
    public String requiredFlashPluginVersion;
    public Creative withRequiredFlashPluginVersion(String requiredFlashPluginVersion) {
        this.requiredFlashPluginVersion = requiredFlashPluginVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredFlashVersion")
    public Integer requiredFlashVersion;
    public Creative withRequiredFlashVersion(Integer requiredFlashVersion) {
        this.requiredFlashVersion = requiredFlashVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;
    public Creative withSize(Size size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOffset")
    public VideoOffset skipOffset;
    public Creative withSkipOffset(VideoOffset skipOffset) {
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
    @JsonProperty("sslCompliant")
    public Boolean sslCompliant;
    public Creative withSslCompliant(Boolean sslCompliant) {
        this.sslCompliant = sslCompliant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslOverride")
    public Boolean sslOverride;
    public Creative withSslOverride(Boolean sslOverride) {
        this.sslOverride = sslOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioAdvertiserId")
    public String studioAdvertiserId;
    public Creative withStudioAdvertiserId(String studioAdvertiserId) {
        this.studioAdvertiserId = studioAdvertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioCreativeId")
    public String studioCreativeId;
    public Creative withStudioCreativeId(String studioCreativeId) {
        this.studioCreativeId = studioCreativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioTraffickedCreativeId")
    public String studioTraffickedCreativeId;
    public Creative withStudioTraffickedCreativeId(String studioTraffickedCreativeId) {
        this.studioTraffickedCreativeId = studioTraffickedCreativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Creative withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyBackupImageImpressionsUrl")
    public String thirdPartyBackupImageImpressionsUrl;
    public Creative withThirdPartyBackupImageImpressionsUrl(String thirdPartyBackupImageImpressionsUrl) {
        this.thirdPartyBackupImageImpressionsUrl = thirdPartyBackupImageImpressionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyRichMediaImpressionsUrl")
    public String thirdPartyRichMediaImpressionsUrl;
    public Creative withThirdPartyRichMediaImpressionsUrl(String thirdPartyRichMediaImpressionsUrl) {
        this.thirdPartyRichMediaImpressionsUrl = thirdPartyRichMediaImpressionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyUrls")
    public ThirdPartyTrackingUrl[] thirdPartyUrls;
    public Creative withThirdPartyUrls(ThirdPartyTrackingUrl[] thirdPartyUrls) {
        this.thirdPartyUrls = thirdPartyUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timerCustomEvents")
    public CreativeCustomEvent[] timerCustomEvents;
    public Creative withTimerCustomEvents(CreativeCustomEvent[] timerCustomEvents) {
        this.timerCustomEvents = timerCustomEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFileSize")
    public String totalFileSize;
    public Creative withTotalFileSize(String totalFileSize) {
        this.totalFileSize = totalFileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreativeTypeEnum type;
    public Creative withType(CreativeTypeEnum type) {
        this.type = type;
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
    @JsonProperty("version")
    public Integer version;
    public Creative withVersion(Integer version) {
        this.version = version;
        return this;
    }
}