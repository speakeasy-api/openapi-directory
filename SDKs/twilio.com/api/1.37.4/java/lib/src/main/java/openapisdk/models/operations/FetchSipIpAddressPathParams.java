package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSipIpAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchSipIpAddressPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IpAccessControlListSid")
    public String ipAccessControlListSid;
    public FetchSipIpAddressPathParams withIpAccessControlListSid(String ipAccessControlListSid) {
        this.ipAccessControlListSid = ipAccessControlListSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSipIpAddressPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}