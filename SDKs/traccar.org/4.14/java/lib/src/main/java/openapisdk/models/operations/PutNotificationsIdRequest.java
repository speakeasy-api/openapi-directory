package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNotificationsIdRequest {
    public PutNotificationsIdPathParams pathParams;
    public PutNotificationsIdRequest withPathParams(PutNotificationsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Notification request;
    public PutNotificationsIdRequest withRequest(openapisdk.models.shared.Notification request) {
        this.request = request;
        return this;
    }
}