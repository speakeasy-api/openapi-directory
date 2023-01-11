package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendPasswordReminderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Email request;
    public SendPasswordReminderRequest withRequest(openapisdk.models.shared.Email request) {
        this.request = request;
        return this;
    }
}