package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserDetailsUpdateForSelfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayeeUserSelfUpdateRequest request;
    public UserDetailsUpdateForSelfRequest withRequest(openapisdk.models.shared.PayeeUserSelfUpdateRequest request) {
        this.request = request;
        return this;
    }
}