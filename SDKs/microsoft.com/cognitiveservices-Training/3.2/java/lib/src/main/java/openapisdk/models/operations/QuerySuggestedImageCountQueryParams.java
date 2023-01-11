package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySuggestedImageCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public QuerySuggestedImageCountQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}