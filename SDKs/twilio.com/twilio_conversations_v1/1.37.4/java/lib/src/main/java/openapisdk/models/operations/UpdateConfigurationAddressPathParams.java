package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateConfigurationAddressPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}