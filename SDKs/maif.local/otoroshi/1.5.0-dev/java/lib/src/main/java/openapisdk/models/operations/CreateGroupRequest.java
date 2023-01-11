package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public CreateGroupRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public CreateGroupSecurity security;
    public CreateGroupRequest withSecurity(CreateGroupSecurity security) {
        this.security = security;
        return this;
    }
}