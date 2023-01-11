package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsTimelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsTimelinePathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}