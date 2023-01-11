package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MappingJobResultFigiNotFound {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public String warning;
    public MappingJobResultFigiNotFound withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}