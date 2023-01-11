package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTopologyMapsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableTopologyMapInput request;
    public ExtrasTopologyMapsCreateRequest withRequest(openapisdk.models.shared.WritableTopologyMapInput request) {
        this.request = request;
        return this;
    }
}