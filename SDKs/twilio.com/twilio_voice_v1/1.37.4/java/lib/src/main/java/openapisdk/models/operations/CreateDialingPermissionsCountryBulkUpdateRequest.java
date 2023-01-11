package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDialingPermissionsCountryBulkUpdateRequest {
    public String serverURL;
    public CreateDialingPermissionsCountryBulkUpdateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest request;
    public CreateDialingPermissionsCountryBulkUpdateRequest withRequest(CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest request) {
        this.request = request;
        return this;
    }
    public CreateDialingPermissionsCountryBulkUpdateSecurity security;
    public CreateDialingPermissionsCountryBulkUpdateRequest withSecurity(CreateDialingPermissionsCountryBulkUpdateSecurity security) {
        this.security = security;
        return this;
    }
}