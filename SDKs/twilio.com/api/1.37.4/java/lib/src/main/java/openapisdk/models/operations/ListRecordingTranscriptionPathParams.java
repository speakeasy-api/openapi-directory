package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordingTranscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListRecordingTranscriptionPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RecordingSid")
    public String recordingSid;
    public ListRecordingTranscriptionPathParams withRecordingSid(String recordingSid) {
        this.recordingSid = recordingSid;
        return this;
    }
}