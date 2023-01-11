package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupContentDetails
 * A group's content details.
**/
public class GroupContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemCount")
    public String itemCount;
    public GroupContentDetails withItemCount(String itemCount) {
        this.itemCount = itemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemType")
    public String itemType;
    public GroupContentDetails withItemType(String itemType) {
        this.itemType = itemType;
        return this;
    }
}