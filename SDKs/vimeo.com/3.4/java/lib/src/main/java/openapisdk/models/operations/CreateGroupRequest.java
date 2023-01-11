package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupRequest {
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.group+json")
    public CreateGroupRequestBody request;
    public CreateGroupRequest withRequest(CreateGroupRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateGroupSecurity security;
    public CreateGroupRequest withSecurity(CreateGroupSecurity security) {
        this.security = security;
        return this;
    }
}