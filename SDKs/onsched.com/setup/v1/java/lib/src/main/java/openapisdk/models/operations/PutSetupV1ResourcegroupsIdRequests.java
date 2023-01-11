package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcegroupsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel;
    public PutSetupV1ResourcegroupsIdRequests withResourceGroupUpdateModel(openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel) {
        this.resourceGroupUpdateModel = resourceGroupUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel1;
    public PutSetupV1ResourcegroupsIdRequests withResourceGroupUpdateModel1(openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel1) {
        this.resourceGroupUpdateModel1 = resourceGroupUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel2;
    public PutSetupV1ResourcegroupsIdRequests withResourceGroupUpdateModel2(openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel2) {
        this.resourceGroupUpdateModel2 = resourceGroupUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel3;
    public PutSetupV1ResourcegroupsIdRequests withResourceGroupUpdateModel3(openapisdk.models.shared.ResourceGroupUpdateModel resourceGroupUpdateModel3) {
        this.resourceGroupUpdateModel3 = resourceGroupUpdateModel3;
        return this;
    }
}