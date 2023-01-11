package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryADatabasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public QueryADatabasePathParams withId(String id) {
        this.id = id;
        return this;
    }
}