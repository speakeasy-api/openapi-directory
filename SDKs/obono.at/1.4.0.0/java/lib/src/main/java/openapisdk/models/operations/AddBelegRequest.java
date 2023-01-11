package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBelegRequest {
    public AddBelegPathParams pathParams;
    public AddBelegRequest withPathParams(AddBelegPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Belegdaten request;
    public AddBelegRequest withRequest(openapisdk.models.shared.Belegdaten request) {
        this.request = request;
        return this;
    }
}