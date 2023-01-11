package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetExportAssetsRequest {
    public CloudassetExportAssetsPathParams pathParams;
    public CloudassetExportAssetsRequest withPathParams(CloudassetExportAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudassetExportAssetsQueryParams queryParams;
    public CloudassetExportAssetsRequest withQueryParams(CloudassetExportAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudAssetV1p7beta1ExportAssetsRequest request;
    public CloudassetExportAssetsRequest withRequest(openapisdk.models.shared.GoogleCloudAssetV1p7beta1ExportAssetsRequest request) {
        this.request = request;
        return this;
    }
    public CloudassetExportAssetsSecurity security;
    public CloudassetExportAssetsRequest withSecurity(CloudassetExportAssetsSecurity security) {
        this.security = security;
        return this;
    }
}