package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTopologyMapsPartialUpdateRequest {
    public ExtrasTopologyMapsPartialUpdatePathParams pathParams;
    public ExtrasTopologyMapsPartialUpdateRequest withPathParams(ExtrasTopologyMapsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableTopologyMapInput request;
    public ExtrasTopologyMapsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableTopologyMapInput request) {
        this.request = request;
        return this;
    }
}