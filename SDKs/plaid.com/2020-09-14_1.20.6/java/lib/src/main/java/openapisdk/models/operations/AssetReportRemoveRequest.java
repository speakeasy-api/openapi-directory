package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportRemoveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportRemoveRequest request;
    public AssetReportRemoveRequest withRequest(openapisdk.models.shared.AssetReportRemoveRequest request) {
        this.request = request;
        return this;
    }
}