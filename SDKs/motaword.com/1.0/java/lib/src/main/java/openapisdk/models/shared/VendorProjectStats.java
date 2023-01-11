package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VendorProjectStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invited")
    public Long invited;
    public VendorProjectStats withInvited(Long invited) {
        this.invited = invited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public VendorProjectStats withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worked")
    public Long worked;
    public VendorProjectStats withWorked(Long worked) {
        this.worked = worked;
        return this;
    }
}