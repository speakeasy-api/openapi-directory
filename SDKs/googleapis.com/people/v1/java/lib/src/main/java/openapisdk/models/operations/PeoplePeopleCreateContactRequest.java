package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleCreateContactRequest {
    public PeoplePeopleCreateContactQueryParams queryParams;
    public PeoplePeopleCreateContactRequest withQueryParams(PeoplePeopleCreateContactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PersonInput request;
    public PeoplePeopleCreateContactRequest withRequest(openapisdk.models.shared.PersonInput request) {
        this.request = request;
        return this;
    }
    public PeoplePeopleCreateContactSecurity security;
    public PeoplePeopleCreateContactRequest withSecurity(PeoplePeopleCreateContactSecurity security) {
        this.security = security;
        return this;
    }
}