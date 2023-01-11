package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FindFormByFormName404ApplicationJson {
    @JsonProperty("errors")
    public Object[] errors;
    public FindFormByFormName404ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
}