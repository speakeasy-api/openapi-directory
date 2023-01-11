package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalInstallerValidateRequest {
    public SasportalInstallerValidateQueryParams queryParams;
    public SasportalInstallerValidateRequest withQueryParams(SasportalInstallerValidateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalValidateInstallerRequest request;
    public SasportalInstallerValidateRequest withRequest(openapisdk.models.shared.SasPortalValidateInstallerRequest request) {
        this.request = request;
        return this;
    }
    public SasportalInstallerValidateSecurity security;
    public SasportalInstallerValidateRequest withSecurity(SasportalInstallerValidateSecurity security) {
        this.security = security;
        return this;
    }
}