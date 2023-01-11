package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSimPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}