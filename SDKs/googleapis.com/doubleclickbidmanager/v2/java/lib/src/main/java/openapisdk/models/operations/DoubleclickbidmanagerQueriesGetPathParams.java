package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queryId")
    public String queryId;
    public DoubleclickbidmanagerQueriesGetPathParams withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}