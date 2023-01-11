package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteServicePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}