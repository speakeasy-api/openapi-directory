package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConfigurationAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchConfigurationAddressPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}