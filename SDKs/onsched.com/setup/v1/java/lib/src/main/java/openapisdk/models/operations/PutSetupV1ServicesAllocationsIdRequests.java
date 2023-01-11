package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ServicesAllocationsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel;
    public PutSetupV1ServicesAllocationsIdRequests withServiceAllocationUpdateModel(openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel) {
        this.serviceAllocationUpdateModel = serviceAllocationUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel1;
    public PutSetupV1ServicesAllocationsIdRequests withServiceAllocationUpdateModel1(openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel1) {
        this.serviceAllocationUpdateModel1 = serviceAllocationUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel2;
    public PutSetupV1ServicesAllocationsIdRequests withServiceAllocationUpdateModel2(openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel2) {
        this.serviceAllocationUpdateModel2 = serviceAllocationUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel3;
    public PutSetupV1ServicesAllocationsIdRequests withServiceAllocationUpdateModel3(openapisdk.models.shared.ServiceAllocationUpdateModel serviceAllocationUpdateModel3) {
        this.serviceAllocationUpdateModel3 = serviceAllocationUpdateModel3;
        return this;
    }
}