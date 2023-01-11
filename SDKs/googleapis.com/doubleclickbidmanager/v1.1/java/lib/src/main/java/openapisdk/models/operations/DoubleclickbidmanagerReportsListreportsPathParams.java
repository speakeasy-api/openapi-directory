package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerReportsListreportsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queryId")
    public String queryId;
    public DoubleclickbidmanagerReportsListreportsPathParams withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}