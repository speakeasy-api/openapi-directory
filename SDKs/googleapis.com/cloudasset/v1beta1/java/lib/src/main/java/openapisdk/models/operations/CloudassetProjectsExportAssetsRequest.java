package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetProjectsExportAssetsRequest {
    public CloudassetProjectsExportAssetsPathParams pathParams;
    public CloudassetProjectsExportAssetsRequest withPathParams(CloudassetProjectsExportAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudassetProjectsExportAssetsQueryParams queryParams;
    public CloudassetProjectsExportAssetsRequest withQueryParams(CloudassetProjectsExportAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportAssetsRequest request;
    public CloudassetProjectsExportAssetsRequest withRequest(openapisdk.models.shared.ExportAssetsRequest request) {
        this.request = request;
        return this;
    }
    public CloudassetProjectsExportAssetsSecurity security;
    public CloudassetProjectsExportAssetsRequest withSecurity(CloudassetProjectsExportAssetsSecurity security) {
        this.security = security;
        return this;
    }
}