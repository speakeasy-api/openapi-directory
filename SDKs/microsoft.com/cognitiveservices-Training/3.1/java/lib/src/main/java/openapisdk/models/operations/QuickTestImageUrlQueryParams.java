package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuickTestImageUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public QuickTestImageUrlQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=store")
    public Boolean store;
    public QuickTestImageUrlQueryParams withStore(Boolean store) {
        this.store = store;
        return this;
    }
}