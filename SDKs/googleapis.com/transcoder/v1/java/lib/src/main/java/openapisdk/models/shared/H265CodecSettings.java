package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * H265CodecSettings
 * H265 codec settings.
**/
public class H265CodecSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOpenGop")
    public Boolean allowOpenGop;
    public H265CodecSettings withAllowOpenGop(Boolean allowOpenGop) {
        this.allowOpenGop = allowOpenGop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aqStrength")
    public Double aqStrength;
    public H265CodecSettings withAqStrength(Double aqStrength) {
        this.aqStrength = aqStrength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bFrameCount")
    public Integer bFrameCount;
    public H265CodecSettings withBFrameCount(Integer bFrameCount) {
        this.bFrameCount = bFrameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bPyramid")
    public Boolean bPyramid;
    public H265CodecSettings withBPyramid(Boolean bPyramid) {
        this.bPyramid = bPyramid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public Integer bitrateBps;
    public H265CodecSettings withBitrateBps(Integer bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crfLevel")
    public Integer crfLevel;
    public H265CodecSettings withCrfLevel(Integer crfLevel) {
        this.crfLevel = crfLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableTwoPass")
    public Boolean enableTwoPass;
    public H265CodecSettings withEnableTwoPass(Boolean enableTwoPass) {
        this.enableTwoPass = enableTwoPass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public Double frameRate;
    public H265CodecSettings withFrameRate(Double frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopDuration")
    public String gopDuration;
    public H265CodecSettings withGopDuration(String gopDuration) {
        this.gopDuration = gopDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopFrameCount")
    public Integer gopFrameCount;
    public H265CodecSettings withGopFrameCount(Integer gopFrameCount) {
        this.gopFrameCount = gopFrameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPixels")
    public Integer heightPixels;
    public H265CodecSettings withHeightPixels(Integer heightPixels) {
        this.heightPixels = heightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelFormat")
    public String pixelFormat;
    public H265CodecSettings withPixelFormat(String pixelFormat) {
        this.pixelFormat = pixelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preset")
    public String preset;
    public H265CodecSettings withPreset(String preset) {
        this.preset = preset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public H265CodecSettings withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateControlMode")
    public String rateControlMode;
    public H265CodecSettings withRateControlMode(String rateControlMode) {
        this.rateControlMode = rateControlMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tune")
    public String tune;
    public H265CodecSettings withTune(String tune) {
        this.tune = tune;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbvFullnessBits")
    public Integer vbvFullnessBits;
    public H265CodecSettings withVbvFullnessBits(Integer vbvFullnessBits) {
        this.vbvFullnessBits = vbvFullnessBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbvSizeBits")
    public Integer vbvSizeBits;
    public H265CodecSettings withVbvSizeBits(Integer vbvSizeBits) {
        this.vbvSizeBits = vbvSizeBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPixels")
    public Integer widthPixels;
    public H265CodecSettings withWidthPixels(Integer widthPixels) {
        this.widthPixels = widthPixels;
        return this;
    }
}