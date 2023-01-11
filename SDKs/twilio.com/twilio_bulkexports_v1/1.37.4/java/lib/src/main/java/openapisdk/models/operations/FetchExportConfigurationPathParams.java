package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchExportConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;
    public FetchExportConfigurationPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}