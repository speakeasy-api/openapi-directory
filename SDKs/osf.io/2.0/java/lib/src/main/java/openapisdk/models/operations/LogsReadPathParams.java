package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LogsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=log_id")
    public String logId;
    public LogsReadPathParams withLogId(String logId) {
        this.logId = logId;
        return this;
    }
}