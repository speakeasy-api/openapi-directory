package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MaintenancePolicy
 * Maintenance policy for an instance.
**/
public class MaintenancePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public MaintenancePolicy withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MaintenancePolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public MaintenancePolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyMaintenanceWindow")
    public WeeklyMaintenanceWindow[] weeklyMaintenanceWindow;
    public MaintenancePolicy withWeeklyMaintenanceWindow(WeeklyMaintenanceWindow[] weeklyMaintenanceWindow) {
        this.weeklyMaintenanceWindow = weeklyMaintenanceWindow;
        return this;
    }
}