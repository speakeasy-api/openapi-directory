package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSourceIpMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSourceIpMappingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}