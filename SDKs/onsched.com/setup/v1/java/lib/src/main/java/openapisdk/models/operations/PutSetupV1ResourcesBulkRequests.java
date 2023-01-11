package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesBulkRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public java.util.Map<String, Object> resourcesUpdateModel;
    public PutSetupV1ResourcesBulkRequests withResourcesUpdateModel(java.util.Map<String, Object> resourcesUpdateModel) {
        this.resourcesUpdateModel = resourcesUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> resourcesUpdateModel1;
    public PutSetupV1ResourcesBulkRequests withResourcesUpdateModel1(java.util.Map<String, Object> resourcesUpdateModel1) {
        this.resourcesUpdateModel1 = resourcesUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public java.util.Map<String, Object> resourcesUpdateModel2;
    public PutSetupV1ResourcesBulkRequests withResourcesUpdateModel2(java.util.Map<String, Object> resourcesUpdateModel2) {
        this.resourcesUpdateModel2 = resourcesUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, Object> resourcesUpdateModel3;
    public PutSetupV1ResourcesBulkRequests withResourcesUpdateModel3(java.util.Map<String, Object> resourcesUpdateModel3) {
        this.resourcesUpdateModel3 = resourcesUpdateModel3;
        return this;
    }
}