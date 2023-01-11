package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Region {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Caption")
    public String caption;
    public Region withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ID")
    public Long id;
    public Region withId(Long id) {
        this.id = id;
        return this;
    }
}