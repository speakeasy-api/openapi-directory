package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdateEmergencyContactsRequest {
    public AddOrUpdateEmergencyContactsPathParams pathParams;
    public AddOrUpdateEmergencyContactsRequest withPathParams(AddOrUpdateEmergencyContactsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EmergencyContact request;
    public AddOrUpdateEmergencyContactsRequest withRequest(openapisdk.models.shared.EmergencyContact request) {
        this.request = request;
        return this;
    }
    public AddOrUpdateEmergencyContactsSecurity security;
    public AddOrUpdateEmergencyContactsRequest withSecurity(AddOrUpdateEmergencyContactsSecurity security) {
        this.security = security;
        return this;
    }
}