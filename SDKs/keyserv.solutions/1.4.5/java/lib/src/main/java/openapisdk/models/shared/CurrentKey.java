package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CurrentKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public Boolean current;
    public CurrentKey withCurrent(Boolean current) {
        this.current = current;
        return this;
    }
}