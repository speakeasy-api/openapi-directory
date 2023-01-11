package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComposeRequest
 * A Compose request.
**/
public class ComposeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Object destination;
    public ComposeRequest withDestination(Object destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ComposeRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceObjects")
    public ComposeRequestSourceObjects[] sourceObjects;
    public ComposeRequest withSourceObjects(ComposeRequestSourceObjects[] sourceObjects) {
        this.sourceObjects = sourceObjects;
        return this;
    }
}