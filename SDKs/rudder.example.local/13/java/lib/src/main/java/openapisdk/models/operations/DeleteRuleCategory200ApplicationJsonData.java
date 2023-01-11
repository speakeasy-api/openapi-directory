package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRuleCategory200ApplicationJsonData {
    @JsonProperty("groupCategories")
    public openapisdk.models.shared.RuleCategory[] groupCategories;
    public DeleteRuleCategory200ApplicationJsonData withGroupCategories(openapisdk.models.shared.RuleCategory[] groupCategories) {
        this.groupCategories = groupCategories;
        return this;
    }
}