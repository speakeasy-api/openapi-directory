package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackJourneyEvent400ApplicationJsonErrors
 * Map that sums up all received values that seemed incorrect
**/
public class TrackJourneyEvent400ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public java.util.Map<String, String> fields;
    public TrackJourneyEvent400ApplicationJsonErrors withFields(java.util.Map<String, String> fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public TrackJourneyEvent400ApplicationJsonErrorsParameters parameters;
    public TrackJourneyEvent400ApplicationJsonErrors withParameters(TrackJourneyEvent400ApplicationJsonErrorsParameters parameters) {
        this.parameters = parameters;
        return this;
    }
}