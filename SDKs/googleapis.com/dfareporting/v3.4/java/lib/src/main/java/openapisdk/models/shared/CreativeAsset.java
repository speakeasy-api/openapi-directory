package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeAsset
 * Creative Asset.
**/
public class CreativeAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionScript3")
    public Boolean actionScript3;
    public CreativeAsset withActionScript3(Boolean actionScript3) {
        this.actionScript3 = actionScript3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreativeAsset withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalSizes")
    public Size[] additionalSizes;
    public CreativeAsset withAdditionalSizes(Size[] additionalSizes) {
        this.additionalSizes = additionalSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alignment")
    public CreativeAssetAlignmentEnum alignment;
    public CreativeAsset withAlignment(CreativeAssetAlignmentEnum alignment) {
        this.alignment = alignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artworkType")
    public CreativeAssetArtworkTypeEnum artworkType;
    public CreativeAsset withArtworkType(CreativeAssetArtworkTypeEnum artworkType) {
        this.artworkType = artworkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetIdentifier")
    public CreativeAssetId assetIdentifier;
    public CreativeAsset withAssetIdentifier(CreativeAssetId assetIdentifier) {
        this.assetIdentifier = assetIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioBitRate")
    public Integer audioBitRate;
    public CreativeAsset withAudioBitRate(Integer audioBitRate) {
        this.audioBitRate = audioBitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioSampleRate")
    public Integer audioSampleRate;
    public CreativeAsset withAudioSampleRate(Integer audioSampleRate) {
        this.audioSampleRate = audioSampleRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupImageExit")
    public CreativeCustomEvent backupImageExit;
    public CreativeAsset withBackupImageExit(CreativeCustomEvent backupImageExit) {
        this.backupImageExit = backupImageExit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitRate")
    public Integer bitRate;
    public CreativeAsset withBitRate(Integer bitRate) {
        this.bitRate = bitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childAssetType")
    public CreativeAssetChildAssetTypeEnum childAssetType;
    public CreativeAsset withChildAssetType(CreativeAssetChildAssetTypeEnum childAssetType) {
        this.childAssetType = childAssetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collapsedSize")
    public Size collapsedSize;
    public CreativeAsset withCollapsedSize(Size collapsedSize) {
        this.collapsedSize = collapsedSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionCreativeIds")
    public String[] companionCreativeIds;
    public CreativeAsset withCompanionCreativeIds(String[] companionCreativeIds) {
        this.companionCreativeIds = companionCreativeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customStartTimeValue")
    public Integer customStartTimeValue;
    public CreativeAsset withCustomStartTimeValue(Integer customStartTimeValue) {
        this.customStartTimeValue = customStartTimeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedFeatures")
    public CreativeAssetDetectedFeaturesEnum[] detectedFeatures;
    public CreativeAsset withDetectedFeatures(CreativeAssetDetectedFeaturesEnum[] detectedFeatures) {
        this.detectedFeatures = detectedFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayType")
    public CreativeAssetDisplayTypeEnum displayType;
    public CreativeAsset withDisplayType(CreativeAssetDisplayTypeEnum displayType) {
        this.displayType = displayType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Integer duration;
    public CreativeAsset withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationType")
    public CreativeAssetDurationTypeEnum durationType;
    public CreativeAsset withDurationType(CreativeAssetDurationTypeEnum durationType) {
        this.durationType = durationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expandedDimension")
    public Size expandedDimension;
    public CreativeAsset withExpandedDimension(Size expandedDimension) {
        this.expandedDimension = expandedDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSize")
    public String fileSize;
    public CreativeAsset withFileSize(String fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flashVersion")
    public Integer flashVersion;
    public CreativeAsset withFlashVersion(Integer flashVersion) {
        this.flashVersion = flashVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public Float frameRate;
    public CreativeAsset withFrameRate(Float frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideFlashObjects")
    public Boolean hideFlashObjects;
    public CreativeAsset withHideFlashObjects(Boolean hideFlashObjects) {
        this.hideFlashObjects = hideFlashObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideSelectionBoxes")
    public Boolean hideSelectionBoxes;
    public CreativeAsset withHideSelectionBoxes(Boolean hideSelectionBoxes) {
        this.hideSelectionBoxes = hideSelectionBoxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("horizontallyLocked")
    public Boolean horizontallyLocked;
    public CreativeAsset withHorizontallyLocked(Boolean horizontallyLocked) {
        this.horizontallyLocked = horizontallyLocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreativeAsset withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public CreativeAsset withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaDuration")
    public Float mediaDuration;
    public CreativeAsset withMediaDuration(Float mediaDuration) {
        this.mediaDuration = mediaDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public CreativeAsset withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public OffsetPosition offset;
    public CreativeAsset withOffset(OffsetPosition offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public CreativeAssetOrientationEnum orientation;
    public CreativeAsset withOrientation(CreativeAssetOrientationEnum orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalBackup")
    public Boolean originalBackup;
    public CreativeAsset withOriginalBackup(Boolean originalBackup) {
        this.originalBackup = originalBackup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("politeLoad")
    public Boolean politeLoad;
    public CreativeAsset withPoliteLoad(Boolean politeLoad) {
        this.politeLoad = politeLoad;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public OffsetPosition position;
    public CreativeAsset withPosition(OffsetPosition position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positionLeftUnit")
    public CreativeAssetPositionLeftUnitEnum positionLeftUnit;
    public CreativeAsset withPositionLeftUnit(CreativeAssetPositionLeftUnitEnum positionLeftUnit) {
        this.positionLeftUnit = positionLeftUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positionTopUnit")
    public CreativeAssetPositionTopUnitEnum positionTopUnit;
    public CreativeAsset withPositionTopUnit(CreativeAssetPositionTopUnitEnum positionTopUnit) {
        this.positionTopUnit = positionTopUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressiveServingUrl")
    public String progressiveServingUrl;
    public CreativeAsset withProgressiveServingUrl(String progressiveServingUrl) {
        this.progressiveServingUrl = progressiveServingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushdown")
    public Boolean pushdown;
    public CreativeAsset withPushdown(Boolean pushdown) {
        this.pushdown = pushdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushdownDuration")
    public Float pushdownDuration;
    public CreativeAsset withPushdownDuration(Float pushdownDuration) {
        this.pushdownDuration = pushdownDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public CreativeAssetRoleEnum role;
    public CreativeAsset withRole(CreativeAssetRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;
    public CreativeAsset withSize(Size size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslCompliant")
    public Boolean sslCompliant;
    public CreativeAsset withSslCompliant(Boolean sslCompliant) {
        this.sslCompliant = sslCompliant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeType")
    public CreativeAssetStartTimeTypeEnum startTimeType;
    public CreativeAsset withStartTimeType(CreativeAssetStartTimeTypeEnum startTimeType) {
        this.startTimeType = startTimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingServingUrl")
    public String streamingServingUrl;
    public CreativeAsset withStreamingServingUrl(String streamingServingUrl) {
        this.streamingServingUrl = streamingServingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transparency")
    public Boolean transparency;
    public CreativeAsset withTransparency(Boolean transparency) {
        this.transparency = transparency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verticallyLocked")
    public Boolean verticallyLocked;
    public CreativeAsset withVerticallyLocked(Boolean verticallyLocked) {
        this.verticallyLocked = verticallyLocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowMode")
    public CreativeAssetWindowModeEnum windowMode;
    public CreativeAsset withWindowMode(CreativeAssetWindowModeEnum windowMode) {
        this.windowMode = windowMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zIndex")
    public Integer zIndex;
    public CreativeAsset withZIndex(Integer zIndex) {
        this.zIndex = zIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipFilename")
    public String zipFilename;
    public CreativeAsset withZipFilename(String zipFilename) {
        this.zipFilename = zipFilename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipFilesize")
    public String zipFilesize;
    public CreativeAsset withZipFilesize(String zipFilesize) {
        this.zipFilesize = zipFilesize;
        return this;
    }
}