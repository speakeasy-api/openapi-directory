package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarkedEpisodeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public MarkedEpisodeEmbedded embedded;
    public MarkedEpisodeInput withEmbedded(MarkedEpisodeEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marked_at")
    public Long markedAt;
    public MarkedEpisodeInput withMarkedAt(Long markedAt) {
        this.markedAt = markedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Object type;
    public MarkedEpisodeInput withType(Object type) {
        this.type = type;
        return this;
    }
}