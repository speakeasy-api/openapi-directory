package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdsAssociatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetUsersIdsAssociatedPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}