package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveCorporateUserGroupRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserGroup request;
    public SaveCorporateUserGroupRequest withRequest(openapisdk.models.shared.UserGroup request) {
        this.request = request;
        return this;
    }
}