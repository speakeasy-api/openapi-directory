package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportAuditCopyGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportAuditCopyGetRequest request;
    public AssetReportAuditCopyGetRequest withRequest(openapisdk.models.shared.AssetReportAuditCopyGetRequest request) {
        this.request = request;
        return this;
    }
}