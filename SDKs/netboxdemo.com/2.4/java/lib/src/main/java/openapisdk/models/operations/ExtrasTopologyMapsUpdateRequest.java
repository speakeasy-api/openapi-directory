package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTopologyMapsUpdateRequest {
    public ExtrasTopologyMapsUpdatePathParams pathParams;
    public ExtrasTopologyMapsUpdateRequest withPathParams(ExtrasTopologyMapsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableTopologyMapInput request;
    public ExtrasTopologyMapsUpdateRequest withRequest(openapisdk.models.shared.WritableTopologyMapInput request) {
        this.request = request;
        return this;
    }
}