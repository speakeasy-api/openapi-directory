package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageRegionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=regionIds")
    public String[] regionIds;
    public DeleteImageRegionsQueryParams withRegionIds(String[] regionIds) {
        this.regionIds = regionIds;
        return this;
    }
}