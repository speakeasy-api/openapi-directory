package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchHolidaySchemeRequest {
    public PatchHolidaySchemePathParams pathParams;
    public PatchHolidaySchemeRequest withPathParams(PatchHolidaySchemePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatchHolidaySchemeHeaders headers;
    public PatchHolidaySchemeRequest withHeaders(PatchHolidaySchemeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HolidayScheme request;
    public PatchHolidaySchemeRequest withRequest(openapisdk.models.shared.HolidayScheme request) {
        this.request = request;
        return this;
    }
}