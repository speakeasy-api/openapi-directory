package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ServicesIdUploadimageRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel;
    public PostSetupV1ServicesIdUploadimageRequests withServiceImageInputModel(openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel) {
        this.serviceImageInputModel = serviceImageInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel1;
    public PostSetupV1ServicesIdUploadimageRequests withServiceImageInputModel1(openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel1) {
        this.serviceImageInputModel1 = serviceImageInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel2;
    public PostSetupV1ServicesIdUploadimageRequests withServiceImageInputModel2(openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel2) {
        this.serviceImageInputModel2 = serviceImageInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel3;
    public PostSetupV1ServicesIdUploadimageRequests withServiceImageInputModel3(openapisdk.models.shared.ServiceImageInputModel serviceImageInputModel3) {
        this.serviceImageInputModel3 = serviceImageInputModel3;
        return this;
    }
}