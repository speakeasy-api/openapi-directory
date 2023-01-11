package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TranscodeSetting
 * Transcode Settings
**/
public class TranscodeSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabledVideoFormats")
    public Integer[] enabledVideoFormats;
    public TranscodeSetting withEnabledVideoFormats(Integer[] enabledVideoFormats) {
        this.enabledVideoFormats = enabledVideoFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TranscodeSetting withKind(String kind) {
        this.kind = kind;
        return this;
    }
}