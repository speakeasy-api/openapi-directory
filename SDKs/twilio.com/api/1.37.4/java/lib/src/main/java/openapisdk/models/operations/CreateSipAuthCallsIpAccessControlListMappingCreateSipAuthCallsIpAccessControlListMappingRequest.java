package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest {
    @SpeakeasyMetadata("form:name=IpAccessControlListSid")
    public String ipAccessControlListSid;
    public CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest withIpAccessControlListSid(String ipAccessControlListSid) {
        this.ipAccessControlListSid = ipAccessControlListSid;
        return this;
    }
}