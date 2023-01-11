package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportAuditCopyCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportAuditCopyCreateRequest request;
    public AssetReportAuditCopyCreateRequest withRequest(openapisdk.models.shared.AssetReportAuditCopyCreateRequest request) {
        this.request = request;
        return this;
    }
}