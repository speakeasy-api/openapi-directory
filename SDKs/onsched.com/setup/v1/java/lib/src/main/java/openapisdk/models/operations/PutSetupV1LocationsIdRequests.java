package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1LocationsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.LocationUpdateModel locationUpdateModel;
    public PutSetupV1LocationsIdRequests withLocationUpdateModel(openapisdk.models.shared.LocationUpdateModel locationUpdateModel) {
        this.locationUpdateModel = locationUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationUpdateModel locationUpdateModel1;
    public PutSetupV1LocationsIdRequests withLocationUpdateModel1(openapisdk.models.shared.LocationUpdateModel locationUpdateModel1) {
        this.locationUpdateModel1 = locationUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.LocationUpdateModel locationUpdateModel2;
    public PutSetupV1LocationsIdRequests withLocationUpdateModel2(openapisdk.models.shared.LocationUpdateModel locationUpdateModel2) {
        this.locationUpdateModel2 = locationUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.LocationUpdateModel locationUpdateModel3;
    public PutSetupV1LocationsIdRequests withLocationUpdateModel3(openapisdk.models.shared.LocationUpdateModel locationUpdateModel3) {
        this.locationUpdateModel3 = locationUpdateModel3;
        return this;
    }
}