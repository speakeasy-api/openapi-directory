package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportRefreshRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportRefreshRequest request;
    public AssetReportRefreshRequest withRequest(openapisdk.models.shared.AssetReportRefreshRequest request) {
        this.request = request;
        return this;
    }
}