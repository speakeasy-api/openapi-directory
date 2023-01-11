package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagePerformanceCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tagIds")
    public String[] tagIds;
    public GetImagePerformanceCountQueryParams withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
}