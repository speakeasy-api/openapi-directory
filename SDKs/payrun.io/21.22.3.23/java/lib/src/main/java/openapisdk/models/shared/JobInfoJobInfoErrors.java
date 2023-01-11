package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobInfoJobInfoErrors
 * The job infos' errors
**/
public class JobInfoJobInfoErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public String[] error;
    public JobInfoJobInfoErrors withError(String[] error) {
        this.error = error;
        return this;
    }
}