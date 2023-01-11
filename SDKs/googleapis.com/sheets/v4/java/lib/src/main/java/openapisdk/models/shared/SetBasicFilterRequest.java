package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetBasicFilterRequest
 * Sets the basic filter associated with a sheet.
**/
public class SetBasicFilterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public BasicFilter filter;
    public SetBasicFilterRequest withFilter(BasicFilter filter) {
        this.filter = filter;
        return this;
    }
}