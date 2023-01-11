package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudMemcacheV1MaintenancePolicyInput
 * Maintenance policy per instance.
**/
public class GoogleCloudMemcacheV1MaintenancePolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudMemcacheV1MaintenancePolicyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyMaintenanceWindow")
    public WeeklyMaintenanceWindow[] weeklyMaintenanceWindow;
    public GoogleCloudMemcacheV1MaintenancePolicyInput withWeeklyMaintenanceWindow(WeeklyMaintenanceWindow[] weeklyMaintenanceWindow) {
        this.weeklyMaintenanceWindow = weeklyMaintenanceWindow;
        return this;
    }
}