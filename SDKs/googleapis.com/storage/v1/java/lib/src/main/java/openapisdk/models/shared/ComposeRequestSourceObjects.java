package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ComposeRequestSourceObjects {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public ComposeRequestSourceObjects withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ComposeRequestSourceObjects withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectPreconditions")
    public ComposeRequestSourceObjectsObjectPreconditions objectPreconditions;
    public ComposeRequestSourceObjects withObjectPreconditions(ComposeRequestSourceObjectsObjectPreconditions objectPreconditions) {
        this.objectPreconditions = objectPreconditions;
        return this;
    }
}