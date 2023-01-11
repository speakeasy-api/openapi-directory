package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchFaxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchFaxPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}