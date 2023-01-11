package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManualRuleGroup
 * A group name and a list of items from the source data that should be placed in the group with this name.
**/
public class ManualRuleGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupName")
    public ExtendedValue groupName;
    public ManualRuleGroup withGroupName(ExtendedValue groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ExtendedValue[] items;
    public ManualRuleGroup withItems(ExtendedValue[] items) {
        this.items = items;
        return this;
    }
}