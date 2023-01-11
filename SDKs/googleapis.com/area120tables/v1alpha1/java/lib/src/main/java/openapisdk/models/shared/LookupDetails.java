package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupDetails
 * Details about a lookup column whose value comes from the associated relationship.
**/
public class LookupDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipColumn")
    public String relationshipColumn;
    public LookupDetails withRelationshipColumn(String relationshipColumn) {
        this.relationshipColumn = relationshipColumn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipColumnId")
    public String relationshipColumnId;
    public LookupDetails withRelationshipColumnId(String relationshipColumnId) {
        this.relationshipColumnId = relationshipColumnId;
        return this;
    }
}