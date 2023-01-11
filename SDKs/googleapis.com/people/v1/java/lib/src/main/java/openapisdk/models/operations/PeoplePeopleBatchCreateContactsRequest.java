package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleBatchCreateContactsRequest {
    public PeoplePeopleBatchCreateContactsQueryParams queryParams;
    public PeoplePeopleBatchCreateContactsRequest withQueryParams(PeoplePeopleBatchCreateContactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchCreateContactsRequestInput request;
    public PeoplePeopleBatchCreateContactsRequest withRequest(openapisdk.models.shared.BatchCreateContactsRequestInput request) {
        this.request = request;
        return this;
    }
    public PeoplePeopleBatchCreateContactsSecurity security;
    public PeoplePeopleBatchCreateContactsRequest withSecurity(PeoplePeopleBatchCreateContactsSecurity security) {
        this.security = security;
        return this;
    }
}