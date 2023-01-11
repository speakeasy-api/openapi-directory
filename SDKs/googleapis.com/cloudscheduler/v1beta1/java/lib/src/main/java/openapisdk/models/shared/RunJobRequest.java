package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunJobRequest
 * Request message for forcing a job to run now using RunJob.
**/
public class RunJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyAppEngineCron")
    public Boolean legacyAppEngineCron;
    public RunJobRequest withLegacyAppEngineCron(Boolean legacyAppEngineCron) {
        this.legacyAppEngineCron = legacyAppEngineCron;
        return this;
    }
}