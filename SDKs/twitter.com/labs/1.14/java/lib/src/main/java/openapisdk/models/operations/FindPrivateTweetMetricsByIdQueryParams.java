package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindPrivateTweetMetricsByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public FindPrivateTweetMetricsByIdQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
}