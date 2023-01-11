package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExportConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;
    public UpdateExportConfigurationPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}