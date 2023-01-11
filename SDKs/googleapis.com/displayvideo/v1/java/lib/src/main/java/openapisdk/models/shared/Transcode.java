package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transcode
 * Represents information about the transcoded audio or video file.
**/
public class Transcode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioBitRateKbps")
    public String audioBitRateKbps;
    public Transcode withAudioBitRateKbps(String audioBitRateKbps) {
        this.audioBitRateKbps = audioBitRateKbps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioSampleRateHz")
    public String audioSampleRateHz;
    public Transcode withAudioSampleRateHz(String audioSampleRateHz) {
        this.audioSampleRateHz = audioSampleRateHz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitRateKbps")
    public String bitRateKbps;
    public Transcode withBitRateKbps(String bitRateKbps) {
        this.bitRateKbps = bitRateKbps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public Transcode withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSizeBytes")
    public String fileSizeBytes;
    public Transcode withFileSizeBytes(String fileSizeBytes) {
        this.fileSizeBytes = fileSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public Float frameRate;
    public Transcode withFrameRate(Float frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public Transcode withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Transcode withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcoded")
    public Boolean transcoded;
    public Transcode withTranscoded(Boolean transcoded) {
        this.transcoded = transcoded;
        return this;
    }
}