package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public PredictImageUrlQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public PredictImageUrlQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}