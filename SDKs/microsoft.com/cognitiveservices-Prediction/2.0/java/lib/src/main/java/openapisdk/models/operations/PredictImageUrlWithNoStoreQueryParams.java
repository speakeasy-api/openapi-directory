package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageUrlWithNoStoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public PredictImageUrlWithNoStoreQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public PredictImageUrlWithNoStoreQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}