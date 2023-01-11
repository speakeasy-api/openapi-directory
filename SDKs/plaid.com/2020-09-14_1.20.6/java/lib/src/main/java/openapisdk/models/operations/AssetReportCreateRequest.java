package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportCreateRequest request;
    public AssetReportCreateRequest withRequest(openapisdk.models.shared.AssetReportCreateRequest request) {
        this.request = request;
        return this;
    }
}