package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Traces
 * List of new or updated traces.
**/
public class Traces {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traces")
    public Trace[] traces;
    public Traces withTraces(Trace[] traces) {
        this.traces = traces;
        return this;
    }
}