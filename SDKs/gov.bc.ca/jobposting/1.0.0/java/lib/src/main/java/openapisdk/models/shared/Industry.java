package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Industry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Caption")
    public String caption;
    public Industry withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ID")
    public Long id;
    public Industry withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubIndustries")
    public SubIndustry[] subIndustries;
    public Industry withSubIndustries(SubIndustry[] subIndustries) {
        this.subIndustries = subIndustries;
        return this;
    }
}