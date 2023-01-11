package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DigitalassetlinksAssetlinksBulkCheckRequest {
    public DigitalassetlinksAssetlinksBulkCheckQueryParams queryParams;
    public DigitalassetlinksAssetlinksBulkCheckRequest withQueryParams(DigitalassetlinksAssetlinksBulkCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkCheckRequest request;
    public DigitalassetlinksAssetlinksBulkCheckRequest withRequest(openapisdk.models.shared.BulkCheckRequest request) {
        this.request = request;
        return this;
    }
}