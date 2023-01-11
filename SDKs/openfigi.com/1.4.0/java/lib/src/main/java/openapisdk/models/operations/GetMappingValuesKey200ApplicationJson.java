package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMappingValuesKey200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public GetMappingValuesKey200ApplicationJson withValues(String[] values) {
        this.values = values;
        return this;
    }
}