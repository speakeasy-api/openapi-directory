package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportFilterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportFilterRequest request;
    public AssetReportFilterRequest withRequest(openapisdk.models.shared.AssetReportFilterRequest request) {
        this.request = request;
        return this;
    }
}