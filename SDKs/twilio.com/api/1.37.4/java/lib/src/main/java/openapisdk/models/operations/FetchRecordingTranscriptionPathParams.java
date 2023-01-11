package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRecordingTranscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchRecordingTranscriptionPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RecordingSid")
    public String recordingSid;
    public FetchRecordingTranscriptionPathParams withRecordingSid(String recordingSid) {
        this.recordingSid = recordingSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRecordingTranscriptionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}