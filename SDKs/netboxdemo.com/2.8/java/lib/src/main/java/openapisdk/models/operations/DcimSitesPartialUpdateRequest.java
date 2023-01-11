package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimSitesPartialUpdateRequest {
    public DcimSitesPartialUpdatePathParams pathParams;
    public DcimSitesPartialUpdateRequest withPathParams(DcimSitesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableSiteInput request;
    public DcimSitesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableSiteInput request) {
        this.request = request;
        return this;
    }
}