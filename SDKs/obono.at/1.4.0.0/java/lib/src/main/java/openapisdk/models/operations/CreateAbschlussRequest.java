package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAbschlussRequest {
    public CreateAbschlussPathParams pathParams;
    public CreateAbschlussRequest withPathParams(CreateAbschlussPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Abschlussbelegdaten request;
    public CreateAbschlussRequest withRequest(openapisdk.models.shared.Abschlussbelegdaten request) {
        this.request = request;
        return this;
    }
}