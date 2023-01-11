package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Output
 * The output format, render range and type of media to generate.
**/
public class Output {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectRatio")
    public OutputAspectRatioEnum aspectRatio;
    public Output withAspectRatio(OutputAspectRatioEnum aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public Object[] destinations;
    public Output withDestinations(Object[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonProperty("format")
    public OutputFormatEnum format;
    public Output withFormat(OutputFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fps")
    public Long fps;
    public Output withFps(Long fps) {
        this.fps = fps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poster")
    public Poster poster;
    public Output withPoster(Poster poster) {
        this.poster = poster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public OutputQualityEnum quality;
    public Output withQuality(OutputQualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public Range range;
    public Output withRange(Range range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolution")
    public OutputResolutionEnum resolution;
    public Output withResolution(OutputResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleTo")
    public OutputScaleToEnum scaleTo;
    public Output withScaleTo(OutputScaleToEnum scaleTo) {
        this.scaleTo = scaleTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Size size;
    public Output withSize(Size size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public Thumbnail thumbnail;
    public Output withThumbnail(Thumbnail thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
}