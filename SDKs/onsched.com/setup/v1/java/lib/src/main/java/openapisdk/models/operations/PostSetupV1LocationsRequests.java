package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1LocationsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.LocationInputModel locationInputModel;
    public PostSetupV1LocationsRequests withLocationInputModel(openapisdk.models.shared.LocationInputModel locationInputModel) {
        this.locationInputModel = locationInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationInputModel locationInputModel1;
    public PostSetupV1LocationsRequests withLocationInputModel1(openapisdk.models.shared.LocationInputModel locationInputModel1) {
        this.locationInputModel1 = locationInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.LocationInputModel locationInputModel2;
    public PostSetupV1LocationsRequests withLocationInputModel2(openapisdk.models.shared.LocationInputModel locationInputModel2) {
        this.locationInputModel2 = locationInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.LocationInputModel locationInputModel3;
    public PostSetupV1LocationsRequests withLocationInputModel3(openapisdk.models.shared.LocationInputModel locationInputModel3) {
        this.locationInputModel3 = locationInputModel3;
        return this;
    }
}