package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ResourcegroupsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel;
    public PostSetupV1ResourcegroupsRequests withResourceGroupInputModel(openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel) {
        this.resourceGroupInputModel = resourceGroupInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel1;
    public PostSetupV1ResourcegroupsRequests withResourceGroupInputModel1(openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel1) {
        this.resourceGroupInputModel1 = resourceGroupInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel2;
    public PostSetupV1ResourcegroupsRequests withResourceGroupInputModel2(openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel2) {
        this.resourceGroupInputModel2 = resourceGroupInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel3;
    public PostSetupV1ResourcegroupsRequests withResourceGroupInputModel3(openapisdk.models.shared.ResourceGroupInputModel resourceGroupInputModel3) {
        this.resourceGroupInputModel3 = resourceGroupInputModel3;
        return this;
    }
}