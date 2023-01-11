package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutTargetsTargetIdFindingsId400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("<field name>")
    public String[] lessThanFieldNameGreaterThan;
    public PutTargetsTargetIdFindingsId400ApplicationJson withLessThanFieldNameGreaterThan(String[] lessThanFieldNameGreaterThan) {
        this.lessThanFieldNameGreaterThan = lessThanFieldNameGreaterThan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_field_errors")
    public String[] nonFieldErrors;
    public PutTargetsTargetIdFindingsId400ApplicationJson withNonFieldErrors(String[] nonFieldErrors) {
        this.nonFieldErrors = nonFieldErrors;
        return this;
    }
}