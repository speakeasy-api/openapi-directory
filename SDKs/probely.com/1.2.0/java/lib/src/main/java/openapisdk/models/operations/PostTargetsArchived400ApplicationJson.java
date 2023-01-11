package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTargetsArchived400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("<field name>")
    public String[] lessThanFieldNameGreaterThan;
    public PostTargetsArchived400ApplicationJson withLessThanFieldNameGreaterThan(String[] lessThanFieldNameGreaterThan) {
        this.lessThanFieldNameGreaterThan = lessThanFieldNameGreaterThan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_field_errors")
    public String[] nonFieldErrors;
    public PostTargetsArchived400ApplicationJson withNonFieldErrors(String[] nonFieldErrors) {
        this.nonFieldErrors = nonFieldErrors;
        return this;
    }
}