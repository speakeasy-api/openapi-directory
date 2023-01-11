package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationConfigTemplateSwitchProfilePortRequest {
    public UpdateOrganizationConfigTemplateSwitchProfilePortPathParams pathParams;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequest withPathParams(UpdateOrganizationConfigTemplateSwitchProfilePortPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody request;
    public UpdateOrganizationConfigTemplateSwitchProfilePortRequest withRequest(UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody request) {
        this.request = request;
        return this;
    }
}