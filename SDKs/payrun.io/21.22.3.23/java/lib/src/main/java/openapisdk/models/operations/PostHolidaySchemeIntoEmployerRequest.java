package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostHolidaySchemeIntoEmployerRequest {
    public PostHolidaySchemeIntoEmployerPathParams pathParams;
    public PostHolidaySchemeIntoEmployerRequest withPathParams(PostHolidaySchemeIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostHolidaySchemeIntoEmployerHeaders headers;
    public PostHolidaySchemeIntoEmployerRequest withHeaders(PostHolidaySchemeIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HolidayScheme request;
    public PostHolidaySchemeIntoEmployerRequest withRequest(openapisdk.models.shared.HolidayScheme request) {
        this.request = request;
        return this;
    }
}