package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResultsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=result_file_id")
    public String resultFileId;
    public ResultsReadPathParams withResultFileId(String resultFileId) {
        this.resultFileId = resultFileId;
        return this;
    }
}