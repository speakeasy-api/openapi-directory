package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationLocationsUpdateAttributesRequest {
    public MybusinessbusinessinformationLocationsUpdateAttributesPathParams pathParams;
    public MybusinessbusinessinformationLocationsUpdateAttributesRequest withPathParams(MybusinessbusinessinformationLocationsUpdateAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessbusinessinformationLocationsUpdateAttributesQueryParams queryParams;
    public MybusinessbusinessinformationLocationsUpdateAttributesRequest withQueryParams(MybusinessbusinessinformationLocationsUpdateAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttributesInput request;
    public MybusinessbusinessinformationLocationsUpdateAttributesRequest withRequest(openapisdk.models.shared.AttributesInput request) {
        this.request = request;
        return this;
    }
}