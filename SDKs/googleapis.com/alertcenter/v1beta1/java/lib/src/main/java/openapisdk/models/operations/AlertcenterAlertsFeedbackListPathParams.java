package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlertcenterAlertsFeedbackListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alertId")
    public String alertId;
    public AlertcenterAlertsFeedbackListPathParams withAlertId(String alertId) {
        this.alertId = alertId;
        return this;
    }
}