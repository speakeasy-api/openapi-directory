package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ServicesIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel;
    public PutSetupV1ServicesIdRequests withServiceUpdateModel(openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel) {
        this.serviceUpdateModel = serviceUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel1;
    public PutSetupV1ServicesIdRequests withServiceUpdateModel1(openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel1) {
        this.serviceUpdateModel1 = serviceUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel2;
    public PutSetupV1ServicesIdRequests withServiceUpdateModel2(openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel2) {
        this.serviceUpdateModel2 = serviceUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel3;
    public PutSetupV1ServicesIdRequests withServiceUpdateModel3(openapisdk.models.shared.ServiceUpdateModel serviceUpdateModel3) {
        this.serviceUpdateModel3 = serviceUpdateModel3;
        return this;
    }
}