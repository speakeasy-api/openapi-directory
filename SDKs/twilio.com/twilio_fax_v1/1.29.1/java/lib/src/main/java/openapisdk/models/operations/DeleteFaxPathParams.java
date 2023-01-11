package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFaxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteFaxPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}