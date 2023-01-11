package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteNamedRangeRequest
 * Removes the named range with the given ID from the spreadsheet.
**/
public class DeleteNamedRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRangeId")
    public String namedRangeId;
    public DeleteNamedRangeRequest withNamedRangeId(String namedRangeId) {
        this.namedRangeId = namedRangeId;
        return this;
    }
}