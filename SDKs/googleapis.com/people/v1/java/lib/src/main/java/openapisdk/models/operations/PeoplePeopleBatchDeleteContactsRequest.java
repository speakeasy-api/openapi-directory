package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleBatchDeleteContactsRequest {
    public PeoplePeopleBatchDeleteContactsQueryParams queryParams;
    public PeoplePeopleBatchDeleteContactsRequest withQueryParams(PeoplePeopleBatchDeleteContactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteContactsRequest request;
    public PeoplePeopleBatchDeleteContactsRequest withRequest(openapisdk.models.shared.BatchDeleteContactsRequest request) {
        this.request = request;
        return this;
    }
    public PeoplePeopleBatchDeleteContactsSecurity security;
    public PeoplePeopleBatchDeleteContactsRequest withSecurity(PeoplePeopleBatchDeleteContactsSecurity security) {
        this.security = security;
        return this;
    }
}