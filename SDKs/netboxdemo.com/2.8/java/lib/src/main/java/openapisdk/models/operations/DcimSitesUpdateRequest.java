package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimSitesUpdateRequest {
    public DcimSitesUpdatePathParams pathParams;
    public DcimSitesUpdateRequest withPathParams(DcimSitesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableSiteInput request;
    public DcimSitesUpdateRequest withRequest(openapisdk.models.shared.WritableSiteInput request) {
        this.request = request;
        return this;
    }
}