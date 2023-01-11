package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectSettings
 * Represents settings associated with a project.
**/
public class ProjectSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationType")
    public ProjectSettingsClassificationTypeEnum classificationType;
    public ProjectSettings withClassificationType(ProjectSettingsClassificationTypeEnum classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectionParameters")
    public String detectionParameters;
    public ProjectSettings withDetectionParameters(String detectionParameters) {
        this.detectionParameters = detectionParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainId")
    public String domainId;
    public ProjectSettings withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageProcessingSettings")
    public ImageProcessingSettings imageProcessingSettings;
    public ProjectSettings withImageProcessingSettings(ImageProcessingSettings imageProcessingSettings) {
        this.imageProcessingSettings = imageProcessingSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetExportPlatforms")
    public ProjectSettingsTargetExportPlatformsEnum[] targetExportPlatforms;
    public ProjectSettings withTargetExportPlatforms(ProjectSettingsTargetExportPlatformsEnum[] targetExportPlatforms) {
        this.targetExportPlatforms = targetExportPlatforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useNegativeSet")
    public Boolean useNegativeSet;
    public ProjectSettings withUseNegativeSet(Boolean useNegativeSet) {
        this.useNegativeSet = useNegativeSet;
        return this;
    }
}