package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListPhoneNumberPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}