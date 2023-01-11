package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExportCustomJobCreateExportCustomJobRequest {
    @SpeakeasyMetadata("form:name=Email")
    public String email;
    public CreateExportCustomJobCreateExportCustomJobRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndDay")
    public String endDay;
    public CreateExportCustomJobCreateExportCustomJobRequest withEndDay(String endDay) {
        this.endDay = endDay;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateExportCustomJobCreateExportCustomJobRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=StartDay")
    public String startDay;
    public CreateExportCustomJobCreateExportCustomJobRequest withStartDay(String startDay) {
        this.startDay = startDay;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookMethod")
    public String webhookMethod;
    public CreateExportCustomJobCreateExportCustomJobRequest withWebhookMethod(String webhookMethod) {
        this.webhookMethod = webhookMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public CreateExportCustomJobCreateExportCustomJobRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}