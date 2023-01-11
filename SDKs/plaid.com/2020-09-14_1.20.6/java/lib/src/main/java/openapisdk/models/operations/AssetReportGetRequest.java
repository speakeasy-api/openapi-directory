package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportGetRequest request;
    public AssetReportGetRequest withRequest(openapisdk.models.shared.AssetReportGetRequest request) {
        this.request = request;
        return this;
    }
}