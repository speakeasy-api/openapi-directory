package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Guaranteed
 * Guaranteed tier definition.
**/
public class Guaranteed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minDuration")
    public String minDuration;
    public Guaranteed withMinDuration(String minDuration) {
        this.minDuration = minDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reserved")
    public Boolean reserved;
    public Guaranteed withReserved(Boolean reserved) {
        this.reserved = reserved;
        return this;
    }
}