package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Vp9CodecSettings
 * VP9 codec settings.
**/
public class Vp9CodecSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public Integer bitrateBps;
    public Vp9CodecSettings withBitrateBps(Integer bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crfLevel")
    public Integer crfLevel;
    public Vp9CodecSettings withCrfLevel(Integer crfLevel) {
        this.crfLevel = crfLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public Double frameRate;
    public Vp9CodecSettings withFrameRate(Double frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopDuration")
    public String gopDuration;
    public Vp9CodecSettings withGopDuration(String gopDuration) {
        this.gopDuration = gopDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopFrameCount")
    public Integer gopFrameCount;
    public Vp9CodecSettings withGopFrameCount(Integer gopFrameCount) {
        this.gopFrameCount = gopFrameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPixels")
    public Integer heightPixels;
    public Vp9CodecSettings withHeightPixels(Integer heightPixels) {
        this.heightPixels = heightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelFormat")
    public String pixelFormat;
    public Vp9CodecSettings withPixelFormat(String pixelFormat) {
        this.pixelFormat = pixelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public Vp9CodecSettings withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateControlMode")
    public String rateControlMode;
    public Vp9CodecSettings withRateControlMode(String rateControlMode) {
        this.rateControlMode = rateControlMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPixels")
    public Integer widthPixels;
    public Vp9CodecSettings withWidthPixels(Integer widthPixels) {
        this.widthPixels = widthPixels;
        return this;
    }
}