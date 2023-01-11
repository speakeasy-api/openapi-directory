package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagHoldInput
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
public class TagHoldInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpLink")
    public String helpLink;
    public TagHoldInput withHelpLink(String helpLink) {
        this.helpLink = helpLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holder")
    public String holder;
    public TagHoldInput withHolder(String holder) {
        this.holder = holder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String origin;
    public TagHoldInput withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}