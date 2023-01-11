package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * ProjectSettingsInput
 * Represents settings associated with a project.
**/
public class ProjectSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationType")
@SpeakeasyMetadata("form:name=classificationType")
    public ProjectSettingsClassificationTypeEnum classificationType;
    public ProjectSettingsInput withClassificationType(ProjectSettingsClassificationTypeEnum classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainId")
@SpeakeasyMetadata("form:name=domainId")
    public String domainId;
    public ProjectSettingsInput withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageProcessingSettings")
@SpeakeasyMetadata("form:name=imageProcessingSettings")
    public ImageProcessingSettings imageProcessingSettings;
    public ProjectSettingsInput withImageProcessingSettings(ImageProcessingSettings imageProcessingSettings) {
        this.imageProcessingSettings = imageProcessingSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetExportPlatforms")
@SpeakeasyMetadata("form:name=targetExportPlatforms")
    public ProjectSettingsTargetExportPlatformsEnum[] targetExportPlatforms;
    public ProjectSettingsInput withTargetExportPlatforms(ProjectSettingsTargetExportPlatformsEnum[] targetExportPlatforms) {
        this.targetExportPlatforms = targetExportPlatforms;
        return this;
    }
}