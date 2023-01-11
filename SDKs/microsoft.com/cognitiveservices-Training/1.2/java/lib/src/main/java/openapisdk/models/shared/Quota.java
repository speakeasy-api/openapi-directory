package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Quota
 * Represents a quota
**/
public class Quota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeUntilReset")
    public String timeUntilReset;
    public Quota withTimeUntilReset(String timeUntilReset) {
        this.timeUntilReset = timeUntilReset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Total")
    public Integer total;
    public Quota withTotal(Integer total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Used")
    public Integer used;
    public Quota withUsed(Integer used) {
        this.used = used;
        return this;
    }
}