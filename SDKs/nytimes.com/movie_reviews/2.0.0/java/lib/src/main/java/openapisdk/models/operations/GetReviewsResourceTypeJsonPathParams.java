package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReviewsResourceTypeJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource-type")
    public GetReviewsResourceTypeJsonResourceTypeEnum resourceType;
    public GetReviewsResourceTypeJsonPathParams withResourceType(GetReviewsResourceTypeJsonResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}