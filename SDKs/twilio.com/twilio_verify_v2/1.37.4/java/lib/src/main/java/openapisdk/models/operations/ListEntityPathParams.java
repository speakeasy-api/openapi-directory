package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEntityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListEntityPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}