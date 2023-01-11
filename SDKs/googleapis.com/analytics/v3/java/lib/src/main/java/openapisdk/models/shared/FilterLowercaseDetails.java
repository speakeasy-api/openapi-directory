package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterLowercaseDetails
 * Details for the filter of the type LOWER.
**/
public class FilterLowercaseDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public FilterLowercaseDetails withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldIndex")
    public Integer fieldIndex;
    public FilterLowercaseDetails withFieldIndex(Integer fieldIndex) {
        this.fieldIndex = fieldIndex;
        return this;
    }
}