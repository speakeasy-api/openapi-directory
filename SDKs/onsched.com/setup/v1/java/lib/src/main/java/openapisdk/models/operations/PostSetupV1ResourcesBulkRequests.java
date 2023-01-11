package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ResourcesBulkRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public java.util.Map<String, Object> resourcesInputModel;
    public PostSetupV1ResourcesBulkRequests withResourcesInputModel(java.util.Map<String, Object> resourcesInputModel) {
        this.resourcesInputModel = resourcesInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> resourcesInputModel1;
    public PostSetupV1ResourcesBulkRequests withResourcesInputModel1(java.util.Map<String, Object> resourcesInputModel1) {
        this.resourcesInputModel1 = resourcesInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public java.util.Map<String, Object> resourcesInputModel2;
    public PostSetupV1ResourcesBulkRequests withResourcesInputModel2(java.util.Map<String, Object> resourcesInputModel2) {
        this.resourcesInputModel2 = resourcesInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, Object> resourcesInputModel3;
    public PostSetupV1ResourcesBulkRequests withResourcesInputModel3(java.util.Map<String, Object> resourcesInputModel3) {
        this.resourcesInputModel3 = resourcesInputModel3;
        return this;
    }
}