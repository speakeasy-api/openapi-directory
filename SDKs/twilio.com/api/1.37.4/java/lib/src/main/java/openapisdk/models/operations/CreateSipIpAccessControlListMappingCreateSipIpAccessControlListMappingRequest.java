package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest {
    @SpeakeasyMetadata("form:name=IpAccessControlListSid")
    public String ipAccessControlListSid;
    public CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest withIpAccessControlListSid(String ipAccessControlListSid) {
        this.ipAccessControlListSid = ipAccessControlListSid;
        return this;
    }
}