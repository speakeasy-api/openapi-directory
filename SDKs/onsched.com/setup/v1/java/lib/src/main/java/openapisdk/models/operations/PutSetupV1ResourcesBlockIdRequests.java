package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesBlockIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel;
    public PutSetupV1ResourcesBlockIdRequests withResourceBlockUpdateModel(openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel) {
        this.resourceBlockUpdateModel = resourceBlockUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel1;
    public PutSetupV1ResourcesBlockIdRequests withResourceBlockUpdateModel1(openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel1) {
        this.resourceBlockUpdateModel1 = resourceBlockUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel2;
    public PutSetupV1ResourcesBlockIdRequests withResourceBlockUpdateModel2(openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel2) {
        this.resourceBlockUpdateModel2 = resourceBlockUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel3;
    public PutSetupV1ResourcesBlockIdRequests withResourceBlockUpdateModel3(openapisdk.models.shared.ResourceBlockUpdateModel resourceBlockUpdateModel3) {
        this.resourceBlockUpdateModel3 = resourceBlockUpdateModel3;
        return this;
    }
}