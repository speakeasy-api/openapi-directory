package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEsimProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchEsimProfilePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}