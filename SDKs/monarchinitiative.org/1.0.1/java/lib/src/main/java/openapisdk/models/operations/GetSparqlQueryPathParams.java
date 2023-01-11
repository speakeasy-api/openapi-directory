package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSparqlQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public GetSparqlQueryPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
}