package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesAllocationsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel;
    public PutSetupV1ResourcesAllocationsIdRequests withResourceAllocationUpdateModel(openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel) {
        this.resourceAllocationUpdateModel = resourceAllocationUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel1;
    public PutSetupV1ResourcesAllocationsIdRequests withResourceAllocationUpdateModel1(openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel1) {
        this.resourceAllocationUpdateModel1 = resourceAllocationUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel2;
    public PutSetupV1ResourcesAllocationsIdRequests withResourceAllocationUpdateModel2(openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel2) {
        this.resourceAllocationUpdateModel2 = resourceAllocationUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel3;
    public PutSetupV1ResourcesAllocationsIdRequests withResourceAllocationUpdateModel3(openapisdk.models.shared.ResourceAllocationUpdateModel resourceAllocationUpdateModel3) {
        this.resourceAllocationUpdateModel3 = resourceAllocationUpdateModel3;
        return this;
    }
}