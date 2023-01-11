package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoStream
 * Video stream resource.
**/
public class VideoStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOpenGop")
    public Boolean allowOpenGop;
    public VideoStream withAllowOpenGop(Boolean allowOpenGop) {
        this.allowOpenGop = allowOpenGop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aqStrength")
    public Double aqStrength;
    public VideoStream withAqStrength(Double aqStrength) {
        this.aqStrength = aqStrength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bFrameCount")
    public Integer bFrameCount;
    public VideoStream withBFrameCount(Integer bFrameCount) {
        this.bFrameCount = bFrameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bPyramid")
    public Boolean bPyramid;
    public VideoStream withBPyramid(Boolean bPyramid) {
        this.bPyramid = bPyramid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public Integer bitrateBps;
    public VideoStream withBitrateBps(Integer bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public String codec;
    public VideoStream withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crfLevel")
    public Integer crfLevel;
    public VideoStream withCrfLevel(Integer crfLevel) {
        this.crfLevel = crfLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableTwoPass")
    public Boolean enableTwoPass;
    public VideoStream withEnableTwoPass(Boolean enableTwoPass) {
        this.enableTwoPass = enableTwoPass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entropyCoder")
    public String entropyCoder;
    public VideoStream withEntropyCoder(String entropyCoder) {
        this.entropyCoder = entropyCoder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public Double frameRate;
    public VideoStream withFrameRate(Double frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopDuration")
    public String gopDuration;
    public VideoStream withGopDuration(String gopDuration) {
        this.gopDuration = gopDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gopFrameCount")
    public Integer gopFrameCount;
    public VideoStream withGopFrameCount(Integer gopFrameCount) {
        this.gopFrameCount = gopFrameCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightPixels")
    public Integer heightPixels;
    public VideoStream withHeightPixels(Integer heightPixels) {
        this.heightPixels = heightPixels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelFormat")
    public String pixelFormat;
    public VideoStream withPixelFormat(String pixelFormat) {
        this.pixelFormat = pixelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preset")
    public String preset;
    public VideoStream withPreset(String preset) {
        this.preset = preset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public VideoStream withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateControlMode")
    public String rateControlMode;
    public VideoStream withRateControlMode(String rateControlMode) {
        this.rateControlMode = rateControlMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tune")
    public String tune;
    public VideoStream withTune(String tune) {
        this.tune = tune;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbvFullnessBits")
    public Integer vbvFullnessBits;
    public VideoStream withVbvFullnessBits(Integer vbvFullnessBits) {
        this.vbvFullnessBits = vbvFullnessBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbvSizeBits")
    public Integer vbvSizeBits;
    public VideoStream withVbvSizeBits(Integer vbvSizeBits) {
        this.vbvSizeBits = vbvSizeBits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widthPixels")
    public Integer widthPixels;
    public VideoStream withWidthPixels(Integer widthPixels) {
        this.widthPixels = widthPixels;
        return this;
    }
}