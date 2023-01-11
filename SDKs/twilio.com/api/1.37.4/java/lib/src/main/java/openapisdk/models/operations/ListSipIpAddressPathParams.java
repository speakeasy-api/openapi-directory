package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipIpAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListSipIpAddressPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IpAccessControlListSid")
    public String ipAccessControlListSid;
    public ListSipIpAddressPathParams withIpAccessControlListSid(String ipAccessControlListSid) {
        this.ipAccessControlListSid = ipAccessControlListSid;
        return this;
    }
}