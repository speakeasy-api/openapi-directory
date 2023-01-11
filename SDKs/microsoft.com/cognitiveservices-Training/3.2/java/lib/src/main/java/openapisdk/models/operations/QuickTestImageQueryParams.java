package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuickTestImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public QuickTestImageQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=store")
    public Boolean store;
    public QuickTestImageQueryParams withStore(Boolean store) {
        this.store = store;
        return this;
    }
}