package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkAlertsSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alerts")
    public UpdateNetworkAlertsSettingsRequestBodyAlerts[] alerts;
    public UpdateNetworkAlertsSettingsRequestBody withAlerts(UpdateNetworkAlertsSettingsRequestBodyAlerts[] alerts) {
        this.alerts = alerts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultDestinations")
    public UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations defaultDestinations;
    public UpdateNetworkAlertsSettingsRequestBody withDefaultDestinations(UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations defaultDestinations) {
        this.defaultDestinations = defaultDestinations;
        return this;
    }
}