package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeFieldAssignment
 * Creative Field Assignment.
**/
public class CreativeFieldAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeFieldId")
    public String creativeFieldId;
    public CreativeFieldAssignment withCreativeFieldId(String creativeFieldId) {
        this.creativeFieldId = creativeFieldId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeFieldValueId")
    public String creativeFieldValueId;
    public CreativeFieldAssignment withCreativeFieldValueId(String creativeFieldValueId) {
        this.creativeFieldValueId = creativeFieldValueId;
        return this;
    }
}