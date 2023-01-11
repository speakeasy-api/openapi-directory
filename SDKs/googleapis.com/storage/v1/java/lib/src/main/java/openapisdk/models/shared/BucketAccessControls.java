package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketAccessControls
 * An access-control list.
**/
public class BucketAccessControls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public BucketAccessControl[] items;
    public BucketAccessControls withItems(BucketAccessControl[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BucketAccessControls withKind(String kind) {
        this.kind = kind;
        return this;
    }
}