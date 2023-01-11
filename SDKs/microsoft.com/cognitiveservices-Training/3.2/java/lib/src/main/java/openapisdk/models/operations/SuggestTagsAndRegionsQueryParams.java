package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuggestTagsAndRegionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=imageIds")
    public String[] imageIds;
    public SuggestTagsAndRegionsQueryParams withImageIds(String[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public SuggestTagsAndRegionsQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}