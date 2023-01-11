package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoFormat
 * Contains information about supported video formats.
**/
public class VideoFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public VideoFormatFileTypeEnum fileType;
    public VideoFormat withFileType(VideoFormatFileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public VideoFormat withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public VideoFormat withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public Size resolution;
    public VideoFormat withResolution(Size resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetBitRate")
    public Integer targetBitRate;
    public VideoFormat withTargetBitRate(Integer targetBitRate) {
        this.targetBitRate = targetBitRate;
        return this;
    }
}