package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSourceIpMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateSourceIpMappingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}