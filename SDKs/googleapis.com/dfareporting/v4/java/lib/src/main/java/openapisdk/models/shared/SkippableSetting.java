package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SkippableSetting
 * Skippable Settings
**/
public class SkippableSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SkippableSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressOffset")
    public VideoOffset progressOffset;
    public SkippableSetting withProgressOffset(VideoOffset progressOffset) {
        this.progressOffset = progressOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOffset")
    public VideoOffset skipOffset;
    public SkippableSetting withSkipOffset(VideoOffset skipOffset) {
        this.skipOffset = skipOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippable")
    public Boolean skippable;
    public SkippableSetting withSkippable(Boolean skippable) {
        this.skippable = skippable;
        return this;
    }
}