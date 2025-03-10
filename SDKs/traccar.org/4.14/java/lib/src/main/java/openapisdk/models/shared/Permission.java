package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Permission
 * This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
**/
public class Permission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeId")
    public Long attributeId;
    public Permission withAttributeId(Long attributeId) {
        this.attributeId = attributeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarId")
    public Long calendarId;
    public Permission withCalendarId(Long calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public Long deviceId;
    public Permission withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driverId")
    public Long driverId;
    public Permission withDriverId(Long driverId) {
        this.driverId = driverId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geofenceId")
    public Long geofenceId;
    public Permission withGeofenceId(Long geofenceId) {
        this.geofenceId = geofenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public Long groupId;
    public Permission withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedUserId")
    public Long managedUserId;
    public Permission withManagedUserId(Long managedUserId) {
        this.managedUserId = managedUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public Long userId;
    public Permission withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}