package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNodesStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public GetNodesStatusQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}