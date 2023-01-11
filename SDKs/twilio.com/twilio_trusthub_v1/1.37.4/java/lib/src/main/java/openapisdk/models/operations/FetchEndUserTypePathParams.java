package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEndUserTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchEndUserTypePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}