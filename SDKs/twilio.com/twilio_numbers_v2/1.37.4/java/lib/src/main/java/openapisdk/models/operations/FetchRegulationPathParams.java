package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRegulationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRegulationPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}