package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserEmailOfferingsRequest {
    public PostUsersUserEmailOfferingsPathParams pathParams;
    public PostUsersUserEmailOfferingsRequest withPathParams(PostUsersUserEmailOfferingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostUsersUserEmailOfferingsRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}