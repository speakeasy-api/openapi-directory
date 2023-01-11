package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvitationVendorsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileNeedsVendor[] request;
    public GetInvitationVendorsRequest withRequest(openapisdk.models.shared.FileNeedsVendor[] request) {
        this.request = request;
        return this;
    }
}