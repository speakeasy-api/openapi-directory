package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdStyleFont
 * The font which is included in the style.
**/
public class AdStyleFont {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public String family;
    public AdStyleFont withFamily(String family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public AdStyleFont withSize(String size) {
        this.size = size;
        return this;
    }
}