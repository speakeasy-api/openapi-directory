package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MutationRecord
 * Describes a change made to a configuration.
**/
public class MutationRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutateTime")
    public String mutateTime;
    public MutationRecord withMutateTime(String mutateTime) {
        this.mutateTime = mutateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutatedBy")
    public String mutatedBy;
    public MutationRecord withMutatedBy(String mutatedBy) {
        this.mutatedBy = mutatedBy;
        return this;
    }
}