package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListRolePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}