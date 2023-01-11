package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsFeedbackCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alertId")
    public String alertId;
    public AlertcenterAlertsFeedbackCreatePathParams withAlertId(String alertId) {
        this.alertId = alertId;
        return this;
    }
}