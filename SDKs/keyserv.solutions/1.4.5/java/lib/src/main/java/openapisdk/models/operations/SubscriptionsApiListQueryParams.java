package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public SubscriptionsApiListQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
}