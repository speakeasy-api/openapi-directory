package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenBadgeClassCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("narrative")
    public String narrative;
    public OpenBadgeClassCriteria withNarrative(String narrative) {
        this.narrative = narrative;
        return this;
    }
}