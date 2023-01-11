package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application")
    public String application;
    public PredictImageQueryParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public PredictImageQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}