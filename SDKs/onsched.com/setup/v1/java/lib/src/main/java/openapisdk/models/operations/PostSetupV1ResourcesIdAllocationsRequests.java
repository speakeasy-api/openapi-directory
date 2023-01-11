package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ResourcesIdAllocationsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel;
    public PostSetupV1ResourcesIdAllocationsRequests withResourceAllocationInputModel(openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel) {
        this.resourceAllocationInputModel = resourceAllocationInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel1;
    public PostSetupV1ResourcesIdAllocationsRequests withResourceAllocationInputModel1(openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel1) {
        this.resourceAllocationInputModel1 = resourceAllocationInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel2;
    public PostSetupV1ResourcesIdAllocationsRequests withResourceAllocationInputModel2(openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel2) {
        this.resourceAllocationInputModel2 = resourceAllocationInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel3;
    public PostSetupV1ResourcesIdAllocationsRequests withResourceAllocationInputModel3(openapisdk.models.shared.ResourceAllocationInputModel resourceAllocationInputModel3) {
        this.resourceAllocationInputModel3 = resourceAllocationInputModel3;
        return this;
    }
}