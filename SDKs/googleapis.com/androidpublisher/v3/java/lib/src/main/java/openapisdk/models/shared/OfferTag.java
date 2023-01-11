package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OfferTag
 * Represents a custom tag specified for base plans and subscription offers.
**/
public class OfferTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public OfferTag withTag(String tag) {
        this.tag = tag;
        return this;
    }
}