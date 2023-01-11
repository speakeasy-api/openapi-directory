package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ServicesIdBlockRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel;
    public PostSetupV1ServicesIdBlockRequests withServiceBlockInputModel(openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel) {
        this.serviceBlockInputModel = serviceBlockInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel1;
    public PostSetupV1ServicesIdBlockRequests withServiceBlockInputModel1(openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel1) {
        this.serviceBlockInputModel1 = serviceBlockInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel2;
    public PostSetupV1ServicesIdBlockRequests withServiceBlockInputModel2(openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel2) {
        this.serviceBlockInputModel2 = serviceBlockInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel3;
    public PostSetupV1ServicesIdBlockRequests withServiceBlockInputModel3(openapisdk.models.shared.ServiceBlockInputModel serviceBlockInputModel3) {
        this.serviceBlockInputModel3 = serviceBlockInputModel3;
        return this;
    }
}