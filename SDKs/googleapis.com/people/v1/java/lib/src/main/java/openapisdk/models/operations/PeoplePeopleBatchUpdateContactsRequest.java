package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleBatchUpdateContactsRequest {
    public PeoplePeopleBatchUpdateContactsQueryParams queryParams;
    public PeoplePeopleBatchUpdateContactsRequest withQueryParams(PeoplePeopleBatchUpdateContactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateContactsRequestInput request;
    public PeoplePeopleBatchUpdateContactsRequest withRequest(openapisdk.models.shared.BatchUpdateContactsRequestInput request) {
        this.request = request;
        return this;
    }
    public PeoplePeopleBatchUpdateContactsSecurity security;
    public PeoplePeopleBatchUpdateContactsRequest withSecurity(PeoplePeopleBatchUpdateContactsSecurity security) {
        this.security = security;
        return this;
    }
}