package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * H264CodecSettings
 * H264 codec settings.
**/
public class H264CodecSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOpenGop")
    public Boolean allowOpenGop;
    public H264CodecSettings withAllowOpenGop(Boolean allowOpenGop) {
        this.allowOpenGop = allowOpenGop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aqStrength")
    public Double aqStrength;
    public H264CodecSettings withAqStrength(Double aqStrength) {
        this.aqStrength = aqStrength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bFrameCount")
    public Integer bFrameCount;
    public H264CodecSettings withBFrameCount(Integer bFrameCount) {
        this.bFrameCount = bFrameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bPyramid")
    public Boolean bPyramid;
    public H264CodecSettings withBPyramid(Boolean bPyramid) {
        this.bPyramid = bPyramid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public Integer bitrateBps;
    public H264CodecSettings withBitrateBps(Integer bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crfLevel")
    public Integer crfLevel;
    public H264CodecSettings withCrfLevel(Integer crfLevel) {
        this.crfLevel = crfLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableTwoPass")
    public Boolean enableTwoPass;
    public H264CodecSettings withEnableTwoPass(Boolean enableTwoPass) {
        this.enableTwoPass = enableTwoPass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entropyCoder")
    public String entropyCoder;
    public H264CodecSettings withEntropyCoder(String entropyCoder) {
        this.entropyCoder = entropyCoder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public Double frameRate;
    public H264CodecSettings withFrameRate(Double frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopDuration")
    public String gopDuration;
    public H264CodecSettings withGopDuration(String gopDuration) {
        this.gopDuration = gopDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopFrameCount")
    public Integer gopFrameCount;
    public H264CodecSettings withGopFrameCount(Integer gopFrameCount) {
        this.gopFrameCount = gopFrameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPixels")
    public Integer heightPixels;
    public H264CodecSettings withHeightPixels(Integer heightPixels) {
        this.heightPixels = heightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelFormat")
    public String pixelFormat;
    public H264CodecSettings withPixelFormat(String pixelFormat) {
        this.pixelFormat = pixelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preset")
    public String preset;
    public H264CodecSettings withPreset(String preset) {
        this.preset = preset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public H264CodecSettings withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateControlMode")
    public String rateControlMode;
    public H264CodecSettings withRateControlMode(String rateControlMode) {
        this.rateControlMode = rateControlMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tune")
    public String tune;
    public H264CodecSettings withTune(String tune) {
        this.tune = tune;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbvFullnessBits")
    public Integer vbvFullnessBits;
    public H264CodecSettings withVbvFullnessBits(Integer vbvFullnessBits) {
        this.vbvFullnessBits = vbvFullnessBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbvSizeBits")
    public Integer vbvSizeBits;
    public H264CodecSettings withVbvSizeBits(Integer vbvSizeBits) {
        this.vbvSizeBits = vbvSizeBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPixels")
    public Integer widthPixels;
    public H264CodecSettings withWidthPixels(Integer widthPixels) {
        this.widthPixels = widthPixels;
        return this;
    }
}