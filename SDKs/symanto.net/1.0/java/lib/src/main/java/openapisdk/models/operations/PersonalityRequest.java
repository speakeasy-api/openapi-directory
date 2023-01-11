package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PersonalityRequest {
    public PersonalityQueryParams queryParams;
    public PersonalityRequest withQueryParams(PersonalityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post[] request;
    public PersonalityRequest withRequest(openapisdk.models.shared.Post[] request) {
        this.request = request;
        return this;
    }
}