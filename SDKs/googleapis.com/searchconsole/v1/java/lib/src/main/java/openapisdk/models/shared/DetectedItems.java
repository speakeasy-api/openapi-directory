package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectedItems
 * Rich Results items grouped by type.
**/
public class DetectedItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Item[] items;
    public DetectedItems withItems(Item[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("richResultType")
    public String richResultType;
    public DetectedItems withRichResultType(String richResultType) {
        this.richResultType = richResultType;
        return this;
    }
}