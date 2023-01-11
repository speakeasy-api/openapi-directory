package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectAccessControls
 * An access-control list.
**/
public class ObjectAccessControls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ObjectAccessControl[] items;
    public ObjectAccessControls withItems(ObjectAccessControl[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ObjectAccessControls withKind(String kind) {
        this.kind = kind;
        return this;
    }
}