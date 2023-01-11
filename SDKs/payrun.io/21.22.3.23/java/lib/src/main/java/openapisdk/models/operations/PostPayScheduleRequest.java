package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPayScheduleRequest {
    public PostPaySchedulePathParams pathParams;
    public PostPayScheduleRequest withPathParams(PostPaySchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostPayScheduleHeaders headers;
    public PostPayScheduleRequest withHeaders(PostPayScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaySchedule request;
    public PostPayScheduleRequest withRequest(openapisdk.models.shared.PaySchedule request) {
        this.request = request;
        return this;
    }
}