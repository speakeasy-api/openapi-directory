package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExportCustomJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;
    public ListExportCustomJobPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}