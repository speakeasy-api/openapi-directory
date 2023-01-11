package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIterationPerformanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=threshold")
    public Float threshold;
    public GetIterationPerformanceQueryParams withThreshold(Float threshold) {
        this.threshold = threshold;
        return this;
    }
}