package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCriticsResourceTypeJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource-type")
    public String resourceType;
    public GetCriticsResourceTypeJsonPathParams withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}