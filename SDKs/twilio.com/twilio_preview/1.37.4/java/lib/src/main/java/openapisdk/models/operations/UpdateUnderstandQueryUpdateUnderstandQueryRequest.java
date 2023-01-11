package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandQueryUpdateUnderstandQueryRequest {
    @SpeakeasyMetadata("form:name=SampleSid")
    public String sampleSid;
    public UpdateUnderstandQueryUpdateUnderstandQueryRequest withSampleSid(String sampleSid) {
        this.sampleSid = sampleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public String status;
    public UpdateUnderstandQueryUpdateUnderstandQueryRequest withStatus(String status) {
        this.status = status;
        return this;
    }
}