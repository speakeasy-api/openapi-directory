package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommissionList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commissions")
    public Commission[] commissions;
    public CommissionList withCommissions(Commission[] commissions) {
        this.commissions = commissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public CommissionList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
}