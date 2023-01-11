package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteConditionalFormatRuleRequest
 * Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
**/
public class DeleteConditionalFormatRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public DeleteConditionalFormatRuleRequest withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public DeleteConditionalFormatRuleRequest withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}