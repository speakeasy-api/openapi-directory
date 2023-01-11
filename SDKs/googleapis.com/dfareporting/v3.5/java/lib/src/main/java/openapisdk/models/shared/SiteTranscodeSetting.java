package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SiteTranscodeSetting
 * Transcode Settings
**/
public class SiteTranscodeSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledVideoFormats")
    public Integer[] enabledVideoFormats;
    public SiteTranscodeSetting withEnabledVideoFormats(Integer[] enabledVideoFormats) {
        this.enabledVideoFormats = enabledVideoFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SiteTranscodeSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
}