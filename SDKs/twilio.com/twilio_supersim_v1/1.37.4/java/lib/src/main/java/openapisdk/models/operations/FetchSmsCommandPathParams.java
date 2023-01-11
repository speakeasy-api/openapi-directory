package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSmsCommandPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSmsCommandPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}