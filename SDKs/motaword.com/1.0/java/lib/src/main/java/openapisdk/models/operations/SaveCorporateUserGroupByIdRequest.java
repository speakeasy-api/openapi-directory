package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveCorporateUserGroupByIdRequest {
    public SaveCorporateUserGroupByIdPathParams pathParams;
    public SaveCorporateUserGroupByIdRequest withPathParams(SaveCorporateUserGroupByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserGroup request;
    public SaveCorporateUserGroupByIdRequest withRequest(openapisdk.models.shared.UserGroup request) {
        this.request = request;
        return this;
    }
}