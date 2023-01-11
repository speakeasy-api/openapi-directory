package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMediaRecordingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchMediaRecordingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}