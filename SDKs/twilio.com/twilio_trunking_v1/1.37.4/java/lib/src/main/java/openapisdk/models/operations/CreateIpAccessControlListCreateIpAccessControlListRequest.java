package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpAccessControlListCreateIpAccessControlListRequest {
    @SpeakeasyMetadata("form:name=IpAccessControlListSid")
    public String ipAccessControlListSid;
    public CreateIpAccessControlListCreateIpAccessControlListRequest withIpAccessControlListSid(String ipAccessControlListSid) {
        this.ipAccessControlListSid = ipAccessControlListSid;
        return this;
    }
}