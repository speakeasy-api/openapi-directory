package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEndUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteEndUserPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}