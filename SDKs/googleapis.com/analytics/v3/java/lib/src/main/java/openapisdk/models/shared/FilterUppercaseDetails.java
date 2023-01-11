package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterUppercaseDetails
 * Details for the filter of the type UPPER.
**/
public class FilterUppercaseDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public FilterUppercaseDetails withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldIndex")
    public Integer fieldIndex;
    public FilterUppercaseDetails withFieldIndex(Integer fieldIndex) {
        this.fieldIndex = fieldIndex;
        return this;
    }
}