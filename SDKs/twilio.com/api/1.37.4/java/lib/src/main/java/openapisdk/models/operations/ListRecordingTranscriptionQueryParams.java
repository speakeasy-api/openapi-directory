package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingTranscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRecordingTranscriptionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}