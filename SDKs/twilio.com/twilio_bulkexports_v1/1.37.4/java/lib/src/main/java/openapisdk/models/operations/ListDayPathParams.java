package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceType")
    public String resourceType;
    public ListDayPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}