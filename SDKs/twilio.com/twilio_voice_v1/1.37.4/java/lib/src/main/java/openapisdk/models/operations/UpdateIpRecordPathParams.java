package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIpRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateIpRecordPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}