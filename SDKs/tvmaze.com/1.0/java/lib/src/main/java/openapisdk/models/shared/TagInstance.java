package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public TagInstanceEmbedded embedded;
    public TagInstance withEmbedded(TagInstanceEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_id")
    public Long showId;
    public TagInstance withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}