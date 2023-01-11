package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelationshipData
 * Information of all parent and children locations related to this one.
**/
public class RelationshipData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentChain")
    public String parentChain;
    public RelationshipData withParentChain(String parentChain) {
        this.parentChain = parentChain;
        return this;
    }
}