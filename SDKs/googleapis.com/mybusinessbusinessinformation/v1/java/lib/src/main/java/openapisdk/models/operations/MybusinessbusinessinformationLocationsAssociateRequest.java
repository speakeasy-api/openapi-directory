package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationLocationsAssociateRequest {
    public MybusinessbusinessinformationLocationsAssociatePathParams pathParams;
    public MybusinessbusinessinformationLocationsAssociateRequest withPathParams(MybusinessbusinessinformationLocationsAssociatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessbusinessinformationLocationsAssociateQueryParams queryParams;
    public MybusinessbusinessinformationLocationsAssociateRequest withQueryParams(MybusinessbusinessinformationLocationsAssociateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateLocationRequest request;
    public MybusinessbusinessinformationLocationsAssociateRequest withRequest(openapisdk.models.shared.AssociateLocationRequest request) {
        this.request = request;
        return this;
    }
}