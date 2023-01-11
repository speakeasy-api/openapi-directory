package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsMergesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsMergesPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}