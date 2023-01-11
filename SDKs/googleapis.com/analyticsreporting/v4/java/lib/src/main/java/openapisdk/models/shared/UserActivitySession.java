package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserActivitySession
 * This represents a user session performed on a specific device at a certain time over a period of time.
**/
public class UserActivitySession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activity[] activities;
    public UserActivitySession withActivities(Activity[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public String dataSource;
    public UserActivitySession withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceCategory")
    public String deviceCategory;
    public UserActivitySession withDeviceCategory(String deviceCategory) {
        this.deviceCategory = deviceCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public String platform;
    public UserActivitySession withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionDate")
    public String sessionDate;
    public UserActivitySession withSessionDate(String sessionDate) {
        this.sessionDate = sessionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public UserActivitySession withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}