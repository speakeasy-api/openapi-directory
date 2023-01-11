package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Acl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Acl withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PlusAclentryResource[] items;
    public Acl withItems(PlusAclentryResource[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Acl withKind(String kind) {
        this.kind = kind;
        return this;
    }
}