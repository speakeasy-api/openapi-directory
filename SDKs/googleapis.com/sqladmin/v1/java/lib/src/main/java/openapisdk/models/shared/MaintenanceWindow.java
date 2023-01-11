package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MaintenanceWindow
 * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
**/
public class MaintenanceWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public Integer day;
    public MaintenanceWindow withDay(Integer day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hour")
    public Integer hour;
    public MaintenanceWindow withHour(Integer hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public MaintenanceWindow withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTrack")
    public MaintenanceWindowUpdateTrackEnum updateTrack;
    public MaintenanceWindow withUpdateTrack(MaintenanceWindowUpdateTrackEnum updateTrack) {
        this.updateTrack = updateTrack;
        return this;
    }
}