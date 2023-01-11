package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudMemcacheV1beta2MaintenancePolicy
 * Maintenance policy per instance.
**/
public class GoogleCloudMemcacheV1beta2MaintenancePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudMemcacheV1beta2MaintenancePolicy withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudMemcacheV1beta2MaintenancePolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudMemcacheV1beta2MaintenancePolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyMaintenanceWindow")
    public WeeklyMaintenanceWindow[] weeklyMaintenanceWindow;
    public GoogleCloudMemcacheV1beta2MaintenancePolicy withWeeklyMaintenanceWindow(WeeklyMaintenanceWindow[] weeklyMaintenanceWindow) {
        this.weeklyMaintenanceWindow = weeklyMaintenanceWindow;
        return this;
    }
}