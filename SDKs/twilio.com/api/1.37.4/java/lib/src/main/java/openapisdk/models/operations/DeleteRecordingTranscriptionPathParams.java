package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRecordingTranscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteRecordingTranscriptionPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RecordingSid")
    public String recordingSid;
    public DeleteRecordingTranscriptionPathParams withRecordingSid(String recordingSid) {
        this.recordingSid = recordingSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteRecordingTranscriptionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}