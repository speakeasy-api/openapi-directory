package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEndUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateEndUserPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}