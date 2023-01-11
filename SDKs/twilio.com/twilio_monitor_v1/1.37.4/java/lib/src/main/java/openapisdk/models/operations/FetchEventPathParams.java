package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchEventPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}