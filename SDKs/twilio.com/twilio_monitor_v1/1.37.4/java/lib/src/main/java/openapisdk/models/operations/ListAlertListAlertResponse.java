package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlertListAlertResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alerts")
    public openapisdk.models.shared.MonitorV1Alert[] alerts;
    public ListAlertListAlertResponse withAlerts(openapisdk.models.shared.MonitorV1Alert[] alerts) {
        this.alerts = alerts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAlertListAlertResponseMeta meta;
    public ListAlertListAlertResponse withMeta(ListAlertListAlertResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}