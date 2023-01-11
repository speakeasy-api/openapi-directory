package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1LocationsBulkRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public java.util.Map<String, Object> locationsInputModel;
    public PostSetupV1LocationsBulkRequests withLocationsInputModel(java.util.Map<String, Object> locationsInputModel) {
        this.locationsInputModel = locationsInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> locationsInputModel1;
    public PostSetupV1LocationsBulkRequests withLocationsInputModel1(java.util.Map<String, Object> locationsInputModel1) {
        this.locationsInputModel1 = locationsInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public java.util.Map<String, Object> locationsInputModel2;
    public PostSetupV1LocationsBulkRequests withLocationsInputModel2(java.util.Map<String, Object> locationsInputModel2) {
        this.locationsInputModel2 = locationsInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, Object> locationsInputModel3;
    public PostSetupV1LocationsBulkRequests withLocationsInputModel3(java.util.Map<String, Object> locationsInputModel3) {
        this.locationsInputModel3 = locationsInputModel3;
        return this;
    }
}