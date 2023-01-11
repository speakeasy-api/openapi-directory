package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CdnSettings
 * Brief description of the live stream cdn settings.
**/
public class CdnSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public CdnSettings withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public CdnSettingsFrameRateEnum frameRate;
    public CdnSettings withFrameRate(CdnSettingsFrameRateEnum frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingestionInfo")
    public IngestionInfo ingestionInfo;
    public CdnSettings withIngestionInfo(IngestionInfo ingestionInfo) {
        this.ingestionInfo = ingestionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingestionType")
    public CdnSettingsIngestionTypeEnum ingestionType;
    public CdnSettings withIngestionType(CdnSettingsIngestionTypeEnum ingestionType) {
        this.ingestionType = ingestionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public CdnSettingsResolutionEnum resolution;
    public CdnSettings withResolution(CdnSettingsResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
}