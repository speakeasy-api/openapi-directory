package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2MonitoringConfig
 * Configuration related to monitoring project activity.
**/
public class GoogleCloudIdentitytoolkitAdminV2MonitoringConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestLogging")
    public GoogleCloudIdentitytoolkitAdminV2RequestLogging requestLogging;
    public GoogleCloudIdentitytoolkitAdminV2MonitoringConfig withRequestLogging(GoogleCloudIdentitytoolkitAdminV2RequestLogging requestLogging) {
        this.requestLogging = requestLogging;
        return this;
    }
}