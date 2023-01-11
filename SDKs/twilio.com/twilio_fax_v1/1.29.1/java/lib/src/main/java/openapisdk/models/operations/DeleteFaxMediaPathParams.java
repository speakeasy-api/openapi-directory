package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFaxMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FaxSid")
    public String faxSid;
    public DeleteFaxMediaPathParams withFaxSid(String faxSid) {
        this.faxSid = faxSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteFaxMediaPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}