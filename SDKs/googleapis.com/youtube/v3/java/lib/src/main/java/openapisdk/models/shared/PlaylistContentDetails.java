package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlaylistContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemCount")
    public Long itemCount;
    public PlaylistContentDetails withItemCount(Long itemCount) {
        this.itemCount = itemCount;
        return this;
    }
}