package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateExportCustomJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;
    public CreateExportCustomJobPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}