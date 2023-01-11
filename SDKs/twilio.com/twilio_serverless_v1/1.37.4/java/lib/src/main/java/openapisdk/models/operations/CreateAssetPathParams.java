package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateAssetPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}