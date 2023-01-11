package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssetReportAuditCopyRemoveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetReportAuditCopyRemoveRequest request;
    public AssetReportAuditCopyRemoveRequest withRequest(openapisdk.models.shared.AssetReportAuditCopyRemoveRequest request) {
        this.request = request;
        return this;
    }
}