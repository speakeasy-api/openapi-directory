package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ElementaryStream
 * Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
**/
public class ElementaryStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioStream")
    public AudioStream audioStream;
    public ElementaryStream withAudioStream(AudioStream audioStream) {
        this.audioStream = audioStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ElementaryStream withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textStream")
    public TextStream textStream;
    public ElementaryStream withTextStream(TextStream textStream) {
        this.textStream = textStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoStream")
    public VideoStream videoStream;
    public ElementaryStream withVideoStream(VideoStream videoStream) {
        this.videoStream = videoStream;
        return this;
    }
}