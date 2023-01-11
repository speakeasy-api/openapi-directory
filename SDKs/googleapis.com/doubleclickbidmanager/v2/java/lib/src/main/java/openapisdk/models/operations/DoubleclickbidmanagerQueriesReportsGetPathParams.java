package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesReportsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=queryId")
    public String queryId;
    public DoubleclickbidmanagerQueriesReportsGetPathParams withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reportId")
    public String reportId;
    public DoubleclickbidmanagerQueriesReportsGetPathParams withReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }
}