package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AliasContext
 * An alias to a repo revision.
**/
public class AliasContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public AliasContextKindEnum kind;
    public AliasContext withKind(AliasContextKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AliasContext withName(String name) {
        this.name = name;
        return this;
    }
}