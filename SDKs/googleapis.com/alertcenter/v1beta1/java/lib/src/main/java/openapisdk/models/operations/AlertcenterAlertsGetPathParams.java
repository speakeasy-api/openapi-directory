package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alertId")
    public String alertId;
    public AlertcenterAlertsGetPathParams withAlertId(String alertId) {
        this.alertId = alertId;
        return this;
    }
}