package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkAlertsSettingsRequestBodyAlerts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertDestinations")
    public UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations alertDestinations;
    public UpdateNetworkAlertsSettingsRequestBodyAlerts withAlertDestinations(UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations alertDestinations) {
        this.alertDestinations = alertDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkAlertsSettingsRequestBodyAlerts withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public java.util.Map<String, Object> filters;
    public UpdateNetworkAlertsSettingsRequestBodyAlerts withFilters(java.util.Map<String, Object> filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public UpdateNetworkAlertsSettingsRequestBodyAlerts withType(String type) {
        this.type = type;
        return this;
    }
}