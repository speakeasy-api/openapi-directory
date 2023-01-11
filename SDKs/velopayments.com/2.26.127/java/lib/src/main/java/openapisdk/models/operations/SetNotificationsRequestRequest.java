package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetNotificationsRequestRequest {
    public SetNotificationsRequestPathParams pathParams;
    public SetNotificationsRequestRequest withPathParams(SetNotificationsRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetNotificationsRequest request;
    public SetNotificationsRequestRequest withRequest(openapisdk.models.shared.SetNotificationsRequest request) {
        this.request = request;
        return this;
    }
}