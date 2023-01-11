package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBadgesIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetBadgesIdsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}