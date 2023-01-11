package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alertId")
    public String alertId;
    public AlertcenterAlertsDeletePathParams withAlertId(String alertId) {
        this.alertId = alertId;
        return this;
    }
}