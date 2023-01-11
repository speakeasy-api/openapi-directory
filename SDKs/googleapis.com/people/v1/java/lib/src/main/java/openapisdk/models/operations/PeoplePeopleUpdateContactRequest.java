package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleUpdateContactRequest {
    public PeoplePeopleUpdateContactPathParams pathParams;
    public PeoplePeopleUpdateContactRequest withPathParams(PeoplePeopleUpdateContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeoplePeopleUpdateContactQueryParams queryParams;
    public PeoplePeopleUpdateContactRequest withQueryParams(PeoplePeopleUpdateContactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PersonInput request;
    public PeoplePeopleUpdateContactRequest withRequest(openapisdk.models.shared.PersonInput request) {
        this.request = request;
        return this;
    }
    public PeoplePeopleUpdateContactSecurity security;
    public PeoplePeopleUpdateContactRequest withSecurity(PeoplePeopleUpdateContactSecurity security) {
        this.security = security;
        return this;
    }
}