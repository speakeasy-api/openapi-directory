package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SectionObject

 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#section-object - Find more info on the official Spotify Web API Reference
**/
public class SectionObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Double confidence;
    public SectionObject withConfidence(Double confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Double duration;
    public SectionObject withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public Integer key;
    public SectionObject withKey(Integer key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key_confidence")
    public Double keyConfidence;
    public SectionObject withKeyConfidence(Double keyConfidence) {
        this.keyConfidence = keyConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loudness")
    public Double loudness;
    public SectionObject withLoudness(Double loudness) {
        this.loudness = loudness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public Integer mode;
    public SectionObject withMode(Integer mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode_confidence")
    public Double modeConfidence;
    public SectionObject withModeConfidence(Double modeConfidence) {
        this.modeConfidence = modeConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Double start;
    public SectionObject withStart(Double start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tempo")
    public Double tempo;
    public SectionObject withTempo(Double tempo) {
        this.tempo = tempo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tempo_confidence")
    public Double tempoConfidence;
    public SectionObject withTempoConfidence(Double tempoConfidence) {
        this.tempoConfidence = tempoConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_signature")
    public Integer timeSignature;
    public SectionObject withTimeSignature(Integer timeSignature) {
        this.timeSignature = timeSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_signature_confidence")
    public Double timeSignatureConfidence;
    public SectionObject withTimeSignatureConfidence(Double timeSignatureConfidence) {
        this.timeSignatureConfidence = timeSignatureConfidence;
        return this;
    }
}