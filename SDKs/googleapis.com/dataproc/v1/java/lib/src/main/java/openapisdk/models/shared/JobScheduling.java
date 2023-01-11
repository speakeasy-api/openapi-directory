package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobScheduling
 * Job scheduling options.
**/
public class JobScheduling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFailuresPerHour")
    public Integer maxFailuresPerHour;
    public JobScheduling withMaxFailuresPerHour(Integer maxFailuresPerHour) {
        this.maxFailuresPerHour = maxFailuresPerHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxFailuresTotal")
    public Integer maxFailuresTotal;
    public JobScheduling withMaxFailuresTotal(Integer maxFailuresTotal) {
        this.maxFailuresTotal = maxFailuresTotal;
        return this;
    }
}