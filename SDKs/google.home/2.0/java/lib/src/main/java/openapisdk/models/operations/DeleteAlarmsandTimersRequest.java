package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAlarmsandTimersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAlarmsandTimersRequest request;
    public DeleteAlarmsandTimersRequest withRequest(openapisdk.models.shared.DeleteAlarmsandTimersRequest request) {
        this.request = request;
        return this;
    }
}