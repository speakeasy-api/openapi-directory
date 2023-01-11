package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutHolidaySchemeIntoEmployerRequest {
    public PutHolidaySchemeIntoEmployerPathParams pathParams;
    public PutHolidaySchemeIntoEmployerRequest withPathParams(PutHolidaySchemeIntoEmployerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutHolidaySchemeIntoEmployerHeaders headers;
    public PutHolidaySchemeIntoEmployerRequest withHeaders(PutHolidaySchemeIntoEmployerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HolidayScheme request;
    public PutHolidaySchemeIntoEmployerRequest withRequest(openapisdk.models.shared.HolidayScheme request) {
        this.request = request;
        return this;
    }
}