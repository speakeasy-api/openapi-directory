package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySuggestedImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public QuerySuggestedImagesQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}