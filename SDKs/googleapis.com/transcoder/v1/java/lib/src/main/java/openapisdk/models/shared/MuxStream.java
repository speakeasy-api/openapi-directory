package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MuxStream
 * Multiplexing settings for output stream.
**/
public class MuxStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public String container;
    public MuxStream withContainer(String container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elementaryStreams")
    public String[] elementaryStreams;
    public MuxStream withElementaryStreams(String[] elementaryStreams) {
        this.elementaryStreams = elementaryStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public MuxStream withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public MuxStream withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentSettings")
    public SegmentSettings segmentSettings;
    public MuxStream withSegmentSettings(SegmentSettings segmentSettings) {
        this.segmentSettings = segmentSettings;
        return this;
    }
}