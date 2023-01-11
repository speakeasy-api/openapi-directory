package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebootandFactoryResetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RebootandFactoryResetRequest request;
    public RebootandFactoryResetRequest withRequest(openapisdk.models.shared.RebootandFactoryResetRequest request) {
        this.request = request;
        return this;
    }
}