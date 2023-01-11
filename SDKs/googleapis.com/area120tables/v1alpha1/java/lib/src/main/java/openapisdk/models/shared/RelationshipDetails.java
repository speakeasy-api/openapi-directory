package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelationshipDetails
 * Details about a relationship column.
**/
public class RelationshipDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedTable")
    public String linkedTable;
    public RelationshipDetails withLinkedTable(String linkedTable) {
        this.linkedTable = linkedTable;
        return this;
    }
}