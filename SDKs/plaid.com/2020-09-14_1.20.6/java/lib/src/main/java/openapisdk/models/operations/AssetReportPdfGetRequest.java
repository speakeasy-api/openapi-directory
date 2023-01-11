package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportPdfGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportPdfGetRequest request;
    public AssetReportPdfGetRequest withRequest(openapisdk.models.shared.AssetReportPdfGetRequest request) {
        this.request = request;
        return this;
    }
}