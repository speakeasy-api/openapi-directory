package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBadgesIdsRecipientsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetBadgesIdsRecipientsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}