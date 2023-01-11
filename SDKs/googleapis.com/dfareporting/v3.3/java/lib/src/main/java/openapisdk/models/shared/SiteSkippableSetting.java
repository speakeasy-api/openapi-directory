package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteSkippableSetting
 * Skippable Settings
**/
public class SiteSkippableSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SiteSkippableSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressOffset")
    public VideoOffset progressOffset;
    public SiteSkippableSetting withProgressOffset(VideoOffset progressOffset) {
        this.progressOffset = progressOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOffset")
    public VideoOffset skipOffset;
    public SiteSkippableSetting withSkipOffset(VideoOffset skipOffset) {
        this.skipOffset = skipOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippable")
    public Boolean skippable;
    public SiteSkippableSetting withSkippable(Boolean skippable) {
        this.skippable = skippable;
        return this;
    }
}