package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailureDetail
 * Additional information about the reasons for the failure.
**/
public class FailureDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FailureDetail withDescription(String description) {
        this.description = description;
        return this;
    }
}