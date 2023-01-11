package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesRunqueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queryId")
    public String queryId;
    public DoubleclickbidmanagerQueriesRunqueryPathParams withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}