package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShowFollow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public ShowFollowEmbedded embedded;
    public ShowFollow withEmbedded(ShowFollowEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_id")
    public Long showId;
    public ShowFollow withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}