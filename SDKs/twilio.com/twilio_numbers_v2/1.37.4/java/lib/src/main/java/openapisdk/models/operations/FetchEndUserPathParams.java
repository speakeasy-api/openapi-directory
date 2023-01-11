package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEndUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchEndUserPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}