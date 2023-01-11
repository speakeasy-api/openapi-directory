package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateServicePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}