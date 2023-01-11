package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ServicesBlockIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel;
    public PutSetupV1ServicesBlockIdRequests withServiceBlockUpdateModel(openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel) {
        this.serviceBlockUpdateModel = serviceBlockUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel1;
    public PutSetupV1ServicesBlockIdRequests withServiceBlockUpdateModel1(openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel1) {
        this.serviceBlockUpdateModel1 = serviceBlockUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel2;
    public PutSetupV1ServicesBlockIdRequests withServiceBlockUpdateModel2(openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel2) {
        this.serviceBlockUpdateModel2 = serviceBlockUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel3;
    public PutSetupV1ServicesBlockIdRequests withServiceBlockUpdateModel3(openapisdk.models.shared.ServiceBlockUpdateModel serviceBlockUpdateModel3) {
        this.serviceBlockUpdateModel3 = serviceBlockUpdateModel3;
        return this;
    }
}