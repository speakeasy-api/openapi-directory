package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimSitesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableSiteInput request;
    public DcimSitesCreateRequest withRequest(openapisdk.models.shared.WritableSiteInput request) {
        this.request = request;
        return this;
    }
}