package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAlphaSenderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListAlphaSenderPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}