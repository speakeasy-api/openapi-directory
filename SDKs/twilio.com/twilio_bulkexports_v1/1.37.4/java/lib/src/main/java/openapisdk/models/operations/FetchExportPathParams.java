package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;
    public FetchExportPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}