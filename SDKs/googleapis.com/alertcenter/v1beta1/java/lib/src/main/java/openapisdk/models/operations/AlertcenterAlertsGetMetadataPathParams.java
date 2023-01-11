package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsGetMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alertId")
    public String alertId;
    public AlertcenterAlertsGetMetadataPathParams withAlertId(String alertId) {
        this.alertId = alertId;
        return this;
    }
}