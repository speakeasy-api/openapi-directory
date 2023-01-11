package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationCategory
 * An application category object.
**/
public class ApplicationCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ApplicationCategory withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public String primary;
    public ApplicationCategory withPrimary(String primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary")
    public String secondary;
    public ApplicationCategory withSecondary(String secondary) {
        this.secondary = secondary;
        return this;
    }
}