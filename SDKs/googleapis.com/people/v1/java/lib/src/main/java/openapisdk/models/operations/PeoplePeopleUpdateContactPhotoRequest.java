package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleUpdateContactPhotoRequest {
    public PeoplePeopleUpdateContactPhotoPathParams pathParams;
    public PeoplePeopleUpdateContactPhotoRequest withPathParams(PeoplePeopleUpdateContactPhotoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeoplePeopleUpdateContactPhotoQueryParams queryParams;
    public PeoplePeopleUpdateContactPhotoRequest withQueryParams(PeoplePeopleUpdateContactPhotoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateContactPhotoRequest request;
    public PeoplePeopleUpdateContactPhotoRequest withRequest(openapisdk.models.shared.UpdateContactPhotoRequest request) {
        this.request = request;
        return this;
    }
    public PeoplePeopleUpdateContactPhotoSecurity security;
    public PeoplePeopleUpdateContactPhotoRequest withSecurity(PeoplePeopleUpdateContactPhotoSecurity security) {
        this.security = security;
        return this;
    }
}