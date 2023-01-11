package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSnmpRequest {
    public UpdateOrganizationSnmpPathParams pathParams;
    public UpdateOrganizationSnmpRequest withPathParams(UpdateOrganizationSnmpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationSnmpRequestBody request;
    public UpdateOrganizationSnmpRequest withRequest(UpdateOrganizationSnmpRequestBody request) {
        this.request = request;
        return this;
    }
}