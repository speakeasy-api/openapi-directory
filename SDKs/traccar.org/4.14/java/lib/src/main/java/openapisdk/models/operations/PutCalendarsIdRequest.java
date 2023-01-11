package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCalendarsIdRequest {
    public PutCalendarsIdPathParams pathParams;
    public PutCalendarsIdRequest withPathParams(PutCalendarsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Calendar request;
    public PutCalendarsIdRequest withRequest(openapisdk.models.shared.Calendar request) {
        this.request = request;
        return this;
    }
}