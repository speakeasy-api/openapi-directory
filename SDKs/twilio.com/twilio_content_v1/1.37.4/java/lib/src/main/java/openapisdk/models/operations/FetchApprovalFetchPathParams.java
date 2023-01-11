package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchApprovalFetchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchApprovalFetchPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}