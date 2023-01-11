package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateQueryUpdateQueryRequest {
    @SpeakeasyMetadata("form:name=SampleSid")
    public String sampleSid;
    public UpdateQueryUpdateQueryRequest withSampleSid(String sampleSid) {
        this.sampleSid = sampleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public String status;
    public UpdateQueryUpdateQueryRequest withStatus(String status) {
        this.status = status;
        return this;
    }
}