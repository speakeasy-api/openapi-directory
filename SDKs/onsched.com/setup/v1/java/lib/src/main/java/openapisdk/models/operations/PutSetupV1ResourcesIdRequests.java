package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel;
    public PutSetupV1ResourcesIdRequests withResourceUpdateModel(openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel) {
        this.resourceUpdateModel = resourceUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel1;
    public PutSetupV1ResourcesIdRequests withResourceUpdateModel1(openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel1) {
        this.resourceUpdateModel1 = resourceUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel2;
    public PutSetupV1ResourcesIdRequests withResourceUpdateModel2(openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel2) {
        this.resourceUpdateModel2 = resourceUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel3;
    public PutSetupV1ResourcesIdRequests withResourceUpdateModel3(openapisdk.models.shared.ResourceUpdateModel resourceUpdateModel3) {
        this.resourceUpdateModel3 = resourceUpdateModel3;
        return this;
    }
}