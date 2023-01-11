package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ResourcesRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ResourceInputModel resourceInputModel;
    public PostSetupV1ResourcesRequests withResourceInputModel(openapisdk.models.shared.ResourceInputModel resourceInputModel) {
        this.resourceInputModel = resourceInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceInputModel resourceInputModel1;
    public PostSetupV1ResourcesRequests withResourceInputModel1(openapisdk.models.shared.ResourceInputModel resourceInputModel1) {
        this.resourceInputModel1 = resourceInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ResourceInputModel resourceInputModel2;
    public PostSetupV1ResourcesRequests withResourceInputModel2(openapisdk.models.shared.ResourceInputModel resourceInputModel2) {
        this.resourceInputModel2 = resourceInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ResourceInputModel resourceInputModel3;
    public PostSetupV1ResourcesRequests withResourceInputModel3(openapisdk.models.shared.ResourceInputModel resourceInputModel3) {
        this.resourceInputModel3 = resourceInputModel3;
        return this;
    }
}