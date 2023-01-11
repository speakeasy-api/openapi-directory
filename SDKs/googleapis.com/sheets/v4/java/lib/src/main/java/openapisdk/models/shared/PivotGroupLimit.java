package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotGroupLimit
 * The count limit on rows or columns in the pivot group.
**/
public class PivotGroupLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyOrder")
    public Integer applyOrder;
    public PivotGroupLimit withApplyOrder(Integer applyOrder) {
        this.applyOrder = applyOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countLimit")
    public Integer countLimit;
    public PivotGroupLimit withCountLimit(Integer countLimit) {
        this.countLimit = countLimit;
        return this;
    }
}