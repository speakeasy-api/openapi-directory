package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloneOrganizationSwitchDevicesRequest {
    public CloneOrganizationSwitchDevicesPathParams pathParams;
    public CloneOrganizationSwitchDevicesRequest withPathParams(CloneOrganizationSwitchDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CloneOrganizationSwitchDevicesRequestBody request;
    public CloneOrganizationSwitchDevicesRequest withRequest(CloneOrganizationSwitchDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}