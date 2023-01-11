package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesDeletequeryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queryId")
    public String queryId;
    public DoubleclickbidmanagerQueriesDeletequeryPathParams withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}