package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ServicesIdAllocationsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel;
    public PostSetupV1ServicesIdAllocationsRequests withServiceAllocationInputModel(openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel) {
        this.serviceAllocationInputModel = serviceAllocationInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel1;
    public PostSetupV1ServicesIdAllocationsRequests withServiceAllocationInputModel1(openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel1) {
        this.serviceAllocationInputModel1 = serviceAllocationInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel2;
    public PostSetupV1ServicesIdAllocationsRequests withServiceAllocationInputModel2(openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel2) {
        this.serviceAllocationInputModel2 = serviceAllocationInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel3;
    public PostSetupV1ServicesIdAllocationsRequests withServiceAllocationInputModel3(openapisdk.models.shared.ServiceAllocationInputModel serviceAllocationInputModel3) {
        this.serviceAllocationInputModel3 = serviceAllocationInputModel3;
        return this;
    }
}