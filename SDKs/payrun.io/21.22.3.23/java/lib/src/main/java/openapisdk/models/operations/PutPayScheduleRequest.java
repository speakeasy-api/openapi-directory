package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPayScheduleRequest {
    public PutPaySchedulePathParams pathParams;
    public PutPayScheduleRequest withPathParams(PutPaySchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutPayScheduleHeaders headers;
    public PutPayScheduleRequest withHeaders(PutPayScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaySchedule request;
    public PutPayScheduleRequest withRequest(openapisdk.models.shared.PaySchedule request) {
        this.request = request;
        return this;
    }
}