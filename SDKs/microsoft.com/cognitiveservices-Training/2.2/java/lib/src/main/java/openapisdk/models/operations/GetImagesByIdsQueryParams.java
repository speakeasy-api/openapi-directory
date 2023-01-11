package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesByIdsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=imageIds")
    public String[] imageIds;
    public GetImagesByIdsQueryParams withImageIds(String[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public GetImagesByIdsQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}