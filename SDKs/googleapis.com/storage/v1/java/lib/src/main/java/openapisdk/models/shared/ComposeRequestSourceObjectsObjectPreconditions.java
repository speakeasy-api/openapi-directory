package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComposeRequestSourceObjectsObjectPreconditions
 * Conditions that must be met for this operation to execute.
**/
public class ComposeRequestSourceObjectsObjectPreconditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ifGenerationMatch")
    public String ifGenerationMatch;
    public ComposeRequestSourceObjectsObjectPreconditions withIfGenerationMatch(String ifGenerationMatch) {
        this.ifGenerationMatch = ifGenerationMatch;
        return this;
    }
}