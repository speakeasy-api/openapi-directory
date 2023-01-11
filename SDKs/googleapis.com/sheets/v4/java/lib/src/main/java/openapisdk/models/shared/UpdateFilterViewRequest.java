package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFilterViewRequest
 * Updates properties of the filter view.
**/
public class UpdateFilterViewRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateFilterViewRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public FilterView filter;
    public UpdateFilterViewRequest withFilter(FilterView filter) {
        this.filter = filter;
        return this;
    }
}