package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShowFollowEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show")
    public java.util.Map<String, Object> show;
    public ShowFollowEmbedded withShow(java.util.Map<String, Object> show) {
        this.show = show;
        return this;
    }
}