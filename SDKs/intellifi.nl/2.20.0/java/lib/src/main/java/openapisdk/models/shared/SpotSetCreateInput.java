package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SpotSetCreateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setid")
    public Long setid;
    public SpotSetCreateInput withSetid(Long setid) {
        this.setid = setid;
        return this;
    }
}