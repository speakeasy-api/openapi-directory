package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRulesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public DeleteRulesRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public DeleteRulesRequest withValues(String[] values) {
        this.values = values;
        return this;
    }
}