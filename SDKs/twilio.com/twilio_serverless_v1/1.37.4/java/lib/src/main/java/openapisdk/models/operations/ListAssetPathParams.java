package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListAssetPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}