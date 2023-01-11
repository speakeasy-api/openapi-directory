package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ServicesRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceInputModel serviceInputModel;
    public PostSetupV1ServicesRequests withServiceInputModel(openapisdk.models.shared.ServiceInputModel serviceInputModel) {
        this.serviceInputModel = serviceInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceInputModel serviceInputModel1;
    public PostSetupV1ServicesRequests withServiceInputModel1(openapisdk.models.shared.ServiceInputModel serviceInputModel1) {
        this.serviceInputModel1 = serviceInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceInputModel serviceInputModel2;
    public PostSetupV1ServicesRequests withServiceInputModel2(openapisdk.models.shared.ServiceInputModel serviceInputModel2) {
        this.serviceInputModel2 = serviceInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceInputModel serviceInputModel3;
    public PostSetupV1ServicesRequests withServiceInputModel3(openapisdk.models.shared.ServiceInputModel serviceInputModel3) {
        this.serviceInputModel3 = serviceInputModel3;
        return this;
    }
}