package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubIndustry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Caption")
    public String caption;
    public SubIndustry withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ID")
    public Long id;
    public SubIndustry withId(Long id) {
        this.id = id;
        return this;
    }
}