package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMediaRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Order")
    public openapisdk.models.shared.MediaRecordingEnumOrderEnum order;
    public ListMediaRecordingQueryParams withOrder(openapisdk.models.shared.MediaRecordingEnumOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMediaRecordingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProcessorSid")
    public String processorSid;
    public ListMediaRecordingQueryParams withProcessorSid(String processorSid) {
        this.processorSid = processorSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceSid")
    public String sourceSid;
    public ListMediaRecordingQueryParams withSourceSid(String sourceSid) {
        this.sourceSid = sourceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.MediaRecordingEnumStatusEnum status;
    public ListMediaRecordingQueryParams withStatus(openapisdk.models.shared.MediaRecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}