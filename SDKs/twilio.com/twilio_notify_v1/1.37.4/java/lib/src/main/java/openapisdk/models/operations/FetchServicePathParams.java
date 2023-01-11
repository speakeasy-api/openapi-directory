package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchServicePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}