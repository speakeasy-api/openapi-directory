package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalInstallerValidateRequest {
    public ProdTtSasportalInstallerValidateQueryParams queryParams;
    public ProdTtSasportalInstallerValidateRequest withQueryParams(ProdTtSasportalInstallerValidateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SasPortalValidateInstallerRequest request;
    public ProdTtSasportalInstallerValidateRequest withRequest(openapisdk.models.shared.SasPortalValidateInstallerRequest request) {
        this.request = request;
        return this;
    }
    public ProdTtSasportalInstallerValidateSecurity security;
    public ProdTtSasportalInstallerValidateRequest withSecurity(ProdTtSasportalInstallerValidateSecurity security) {
        this.security = security;
        return this;
    }
}