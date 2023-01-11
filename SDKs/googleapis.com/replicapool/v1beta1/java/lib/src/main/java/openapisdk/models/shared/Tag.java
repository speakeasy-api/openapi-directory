package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tag
 * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
**/
public class Tag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerPrint")
    public String fingerPrint;
    public Tag withFingerPrint(String fingerPrint) {
        this.fingerPrint = fingerPrint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public String[] items;
    public Tag withItems(String[] items) {
        this.items = items;
        return this;
    }
}