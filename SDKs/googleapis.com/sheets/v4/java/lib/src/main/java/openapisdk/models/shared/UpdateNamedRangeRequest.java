package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNamedRangeRequest
 * Updates properties of the named range with the specified namedRangeId.
**/
public class UpdateNamedRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateNamedRangeRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRange")
    public NamedRange namedRange;
    public UpdateNamedRangeRequest withNamedRange(NamedRange namedRange) {
        this.namedRange = namedRange;
        return this;
    }
}