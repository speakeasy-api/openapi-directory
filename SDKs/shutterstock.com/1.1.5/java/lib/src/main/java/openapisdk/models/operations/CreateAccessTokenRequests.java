package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessTokenRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAccessTokenApplicationJson object;
    public CreateAccessTokenRequests withObject(CreateAccessTokenApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateAccessTokenApplicationXWwwFormUrlencoded object1;
    public CreateAccessTokenRequests withObject1(CreateAccessTokenApplicationXWwwFormUrlencoded object1) {
        this.object1 = object1;
        return this;
    }
}