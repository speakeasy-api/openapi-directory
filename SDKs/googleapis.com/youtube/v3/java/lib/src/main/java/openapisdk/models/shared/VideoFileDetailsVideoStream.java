package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoFileDetailsVideoStream
 * Information about a video stream.
**/
public class VideoFileDetailsVideoStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectRatio")
    public Double aspectRatio;
    public VideoFileDetailsVideoStream withAspectRatio(Double aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public String bitrateBps;
    public VideoFileDetailsVideoStream withBitrateBps(String bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public String codec;
    public VideoFileDetailsVideoStream withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRateFps")
    public Double frameRateFps;
    public VideoFileDetailsVideoStream withFrameRateFps(Double frameRateFps) {
        this.frameRateFps = frameRateFps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPixels")
    public Long heightPixels;
    public VideoFileDetailsVideoStream withHeightPixels(Long heightPixels) {
        this.heightPixels = heightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotation")
    public VideoFileDetailsVideoStreamRotationEnum rotation;
    public VideoFileDetailsVideoStream withRotation(VideoFileDetailsVideoStreamRotationEnum rotation) {
        this.rotation = rotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public String vendor;
    public VideoFileDetailsVideoStream withVendor(String vendor) {
        this.vendor = vendor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPixels")
    public Long widthPixels;
    public VideoFileDetailsVideoStream withWidthPixels(Long widthPixels) {
        this.widthPixels = widthPixels;
        return this;
    }
}