package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1TelemetryUserInfo
 * Information about a user associated with telemetry data.
**/
public class GoogleChromeManagementV1TelemetryUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GoogleChromeManagementV1TelemetryUserInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnitId")
    public String orgUnitId;
    public GoogleChromeManagementV1TelemetryUserInfo withOrgUnitId(String orgUnitId) {
        this.orgUnitId = orgUnitId;
        return this;
    }
}