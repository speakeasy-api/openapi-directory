package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAttributesComputedIdRequest {
    public PutAttributesComputedIdPathParams pathParams;
    public PutAttributesComputedIdRequest withPathParams(PutAttributesComputedIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Attribute request;
    public PutAttributesComputedIdRequest withRequest(openapisdk.models.shared.Attribute request) {
        this.request = request;
        return this;
    }
}