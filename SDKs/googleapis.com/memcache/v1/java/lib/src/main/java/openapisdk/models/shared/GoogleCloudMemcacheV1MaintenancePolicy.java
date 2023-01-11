package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudMemcacheV1MaintenancePolicy
 * Maintenance policy per instance.
**/
public class GoogleCloudMemcacheV1MaintenancePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudMemcacheV1MaintenancePolicy withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudMemcacheV1MaintenancePolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudMemcacheV1MaintenancePolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyMaintenanceWindow")
    public WeeklyMaintenanceWindow[] weeklyMaintenanceWindow;
    public GoogleCloudMemcacheV1MaintenancePolicy withWeeklyMaintenanceWindow(WeeklyMaintenanceWindow[] weeklyMaintenanceWindow) {
        this.weeklyMaintenanceWindow = weeklyMaintenanceWindow;
        return this;
    }
}