package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queryId")
    public String queryId;
    public DoubleclickbidmanagerQueriesDeletePathParams withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}