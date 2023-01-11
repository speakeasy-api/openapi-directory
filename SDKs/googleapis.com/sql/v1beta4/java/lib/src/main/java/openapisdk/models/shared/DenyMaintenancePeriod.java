package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DenyMaintenancePeriod
 * Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.
**/
public class DenyMaintenancePeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public DenyMaintenancePeriod withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public DenyMaintenancePeriod withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public DenyMaintenancePeriod withTime(String time) {
        this.time = time;
        return this;
    }
}