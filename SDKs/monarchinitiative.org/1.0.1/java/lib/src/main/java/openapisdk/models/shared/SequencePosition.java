package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SequencePosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public SequencePosition withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public String reference;
    public SequencePosition withReference(String reference) {
        this.reference = reference;
        return this;
    }
}